import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import { routeConfig, fallbackRoute } from "./lib/routeConfig";

const PageLoader = () => {
    return (
        <Box
            sx={{
                minHeight: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 1.5,
            }}
        >
            <CircularProgress size={34} thickness={4} />
            <Typography variant="body2">Loading article...</Typography>
        </Box>
    );
};

const AppRoutes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routeConfig.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}

                <Route
                    path={fallbackRoute.path}
                    element={fallbackRoute.element}
                />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
