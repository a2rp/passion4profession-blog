import React from "react";
import {
    FiRefreshCw,
    FiClock,
    FiCheckCircle,
    FiAlertCircle,
    FiShield,
    FiCpu,
    FiHardDrive,
    FiSettings,
    FiLayers,
    FiArrowRight,
    FiHelpCircle,
    FiInfo,
} from "react-icons/fi";

import { Styled } from "./styled";
import ShareButtons from "../../../components/shareButton";

const howItWorksSteps = [
    {
        icon: <FiClock />,
        title: "Restore points are created",
        text: "Windows periodically creates restore points automatically. They capture important system state including registry settings, drivers and system files.",
    },
    {
        icon: <FiLayers />,
        title: "System configuration is saved",
        text: "Windows stores a snapshot of system settings, installed drivers and core system files.",
    },
    {
        icon: <FiRefreshCw />,
        title: "You select a restore point",
        text: "When problems appear, you choose an earlier restore point and Windows rolls system configuration back.",
    },
    {
        icon: <FiCheckCircle />,
        title: "Windows restarts with old settings",
        text: "After reboot, Windows loads the restored system configuration while keeping personal files intact.",
    },
];

const whatGetsRestored = [
    "Windows system files",
    "Windows registry settings",
    "Installed drivers",
    "Installed applications after restore point",
    "System configuration",
];

const whatDoesNotChange = [
    "Personal documents",
    "Photos and videos",
    "Downloads",
    "Desktop files",
    "Personal folders",
];

const commonScenarios = [
    {
        title: "Driver update broke the system",
        text: "A new graphics or audio driver might cause crashes. Restoring the system to an earlier point can quickly fix it.",
    },
    {
        title: "A software installation caused problems",
        text: "Some programs modify system files or registry settings. A restore point can revert those changes.",
    },
    {
        title: "Windows update created issues",
        text: "Sometimes updates introduce compatibility problems. System Restore can roll the system back to a stable state.",
    },
    {
        title: "System suddenly becomes unstable",
        text: "If your computer suddenly freezes or crashes frequently, restoring to a previous state can help diagnose the cause.",
    },
];

const myths = [
    {
        title: "Myth - System Restore deletes my personal files",
        text: "System Restore does not delete personal files. It only affects system configuration, drivers and applications.",
    },
    {
        title: "Myth - It works like a full backup",
        text: "System Restore is not a backup system. It does not protect your personal documents.",
    },
    {
        title: "Myth - It always fixes everything",
        text: "System Restore is helpful but not magical. If the problem is hardware related or deeply corrupted, it may not solve it.",
    },
];

const faq = [
    {
        q: "Where are restore points stored?",
        a: "Restore points are stored on your system drive, usually the Windows drive. Windows allocates a certain amount of space for them.",
    },
    {
        q: "Does Windows create restore points automatically?",
        a: "Yes. Windows often creates restore points during updates, driver installations or major system changes.",
    },
    {
        q: "Can I create a restore point manually?",
        a: "Yes. Windows allows manual creation of restore points through System Protection settings.",
    },
    {
        q: "What happens to apps installed after the restore point?",
        a: "Applications installed after the restore point may be removed because they did not exist at the time of that snapshot.",
    },
];

const SystemRestoreRollingBackWindows = () => {
    return (
        <Styled.Wrapper>
            <Styled.Hero>
                <div className="badge">
                    <FiRefreshCw /> Windows recovery
                </div>

                <h1>
                    System Restore - Rolling Back Windows to a Working State
                </h1>

                <p className="lead">
                    System Restore is a Windows feature that lets you return
                    your computer to an earlier working state. It can undo
                    changes caused by problematic software installations,
                    drivers or system updates without affecting personal files.
                </p>

                <div className="shareRow">
                    <ShareButtons />
                </div>

                <div className="heroGrid">
                    <div className="heroCard">
                        <FiClock />
                        <h3>Restore points</h3>
                        <p>
                            Windows automatically creates restore points before
                            major changes.
                        </p>
                    </div>

                    <div className="heroCard">
                        <FiRefreshCw />
                        <h3>Rollback system changes</h3>
                        <p>
                            System configuration can be rolled back to a stable
                            point in time.
                        </p>
                    </div>

                    <div className="heroCard">
                        <FiShield />
                        <h3>Personal files stay safe</h3>
                        <p>
                            Documents, photos and personal files are not
                            affected.
                        </p>
                    </div>
                </div>
            </Styled.Hero>

            <Styled.Section>
                <h2>
                    <FiInfo /> What is System Restore
                </h2>

                <p>
                    System Restore is a built in Windows recovery feature that
                    allows your computer to revert system settings to a previous
                    point in time. It is designed to fix problems caused by
                    configuration changes rather than data loss.
                </p>

                <p>
                    Instead of reinstalling Windows or troubleshooting dozens of
                    settings, you can restore the system to a state when
                    everything worked correctly.
                </p>
            </Styled.Section>

            <Styled.Section>
                <h2>
                    <FiArrowRight /> How System Restore works
                </h2>

                <div className="grid">
                    {howItWorksSteps.map((item) => (
                        <div key={item.title} className="card">
                            <div className="icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </Styled.Section>

            <Styled.Section>
                <h2>
                    <FiCpu /> What System Restore changes
                </h2>

                <div className="twoCol">
                    <div className="box">
                        <h3>
                            <FiCheckCircle /> Things that change
                        </h3>
                        <ul>
                            {whatGetsRestored.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="box">
                        <h3>
                            <FiShield /> Things that do not change
                        </h3>
                        <ul>
                            {whatDoesNotChange.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Styled.Section>

            <Styled.Section>
                <h2>
                    <FiHardDrive /> Real world situations
                </h2>

                <div className="grid">
                    {commonScenarios.map((item) => (
                        <div key={item.title} className="card">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </Styled.Section>

            <Styled.Section>
                <h2>
                    <FiAlertCircle /> Common myths
                </h2>

                <div className="grid">
                    {myths.map((item) => (
                        <div key={item.title} className="card">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </Styled.Section>

            <Styled.Section>
                <h2>
                    <FiHelpCircle /> Frequently asked questions
                </h2>

                <div className="faq">
                    {faq.map((item) => (
                        <div key={item.q} className="faqItem">
                            <h3>{item.q}</h3>
                            <p>{item.a}</p>
                        </div>
                    ))}
                </div>
            </Styled.Section>

            <Styled.Final>
                <h2>Key takeaway</h2>
                <p>
                    System Restore is one of the safest troubleshooting tools in
                    Windows. It allows you to roll back system configuration
                    without touching personal files. When a driver, software or
                    update causes instability, restoring to an earlier point can
                    quickly return the computer to a stable state.
                </p>
            </Styled.Final>
        </Styled.Wrapper>
    );
};

export default SystemRestoreRollingBackWindows;
