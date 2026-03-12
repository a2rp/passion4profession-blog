import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { parse } from "@babel/parser";
import traverseModule from "@babel/traverse";

const traverse = traverseModule.default;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogRegistryPath = path.resolve(__dirname, "../lib/blogRegistry.jsx");
const outputPath = path.resolve(__dirname, "../../public/blogs-index.json");

const sourceCode = fs.readFileSync(blogRegistryPath, "utf-8");

const ast = parse(sourceCode, {
    sourceType: "module",
    plugins: ["jsx"],
});

const blogEntries = [];

const getStringValue = (node) => {
    if (!node) return "";

    if (node.type === "StringLiteral") {
        return node.value;
    }

    if (
        node.type === "TemplateLiteral" &&
        node.expressions.length === 0 &&
        node.quasis.length === 1
    ) {
        return node.quasis[0].value.cooked || "";
    }

    return "";
};

traverse(ast, {
    VariableDeclarator(pathRef) {
        const { node } = pathRef;

        if (
            node.id?.type !== "Identifier" ||
            node.id.name !== "blogRegistry" ||
            node.init?.type !== "ArrayExpression"
        ) {
            return;
        }

        for (const element of node.init.elements) {
            if (!element || element.type !== "ObjectExpression") continue;

            const blog = {};

            for (const property of element.properties) {
                if (
                    property.type !== "ObjectProperty" ||
                    property.key.type !== "Identifier"
                ) {
                    continue;
                }

                const keyName = property.key.name;

                if (
                    keyName === "title" ||
                    keyName === "path" ||
                    keyName === "date"
                ) {
                    blog[keyName] = getStringValue(property.value);
                }
            }

            if (blog.title && blog.path && blog.date) {
                blogEntries.push(blog);
            }
        }
    },
});

fs.writeFileSync(outputPath, JSON.stringify(blogEntries, null, 4), "utf-8");

console.log(
    `blogs-index.json generated successfully with ${blogEntries.length} blog entries`,
);
