import React from "react";
import Placeholder from "../pages/placeholder";

import BiosAndUefiHowAComputerActuallyStarts from "../pages/blogs/biosAndUefiHowAComputerActuallyStarts";
import Fat32NtfsExfatUnderstandingFileSystems from "../pages/blogs/fat32NtfsExfatUnderstandingFileSystems";
import RamVsStorageWhyYourComputerNeedsBoth from "../pages/blogs/ramVsStorageWhyYourComputerNeedsBoth";
import CacheMemoryWhyCpusNeedFastMemory from "../pages/blogs/cacheMemoryWhyCpusNeedFastMemory";
import CompilerVsInterpreterVsAssemblerHowProgramsBecomeMachineCode from "../pages/blogs/compilerVsInterpreterVsAssemblerHowProgramsBecomeMachineCode";
import SourceCodeToMachineCode from "../pages/blogs/sourceCodeToMachineCode";
import TheKernelTheMostImportantPartOfAnOperatingSystem from "../pages/blogs/theKernelHeartOfOperatingSystem";
import DeviceDriversHowHardwareTalksToSoftware from "../pages/blogs/deviceDriversHowHardwareTalksToSoftware";
import VirtualMachinesRunningMultipleOperatingSystemsOnOneComputer from "../pages/blogs/virtualMachinesRunningMultipleOperatingSystemsOnOneComputer";
import IsoFilesTheStandardFormatForSystemImages from "../pages/blogs/isoFilesTheStandardFormatForSystemImages";
import QuickFormatVsFullFormat from "../pages/blogs/quickFormatVsFullFormat";
import DnsHowDomainNamesWork from "../pages/blogs/dnsHowDomainNamesWork";
import EncryptionVsHashing from "../pages/blogs/encryptionVsHashing";
import ApisHowDifferentApplicationsCommunicate from "../pages/blogs/apisHowDifferentApplicationsCommunicate";
import UnicodeAndUtf8HowComputersRepresentText from "../pages/blogs/unicodeAndUtf8HowComputersRepresentText";
import OpenSourceSoftwareWhyCollaborationPowersTechnology from "../pages/blogs/openSourceSoftwareWhyCollaborationPowersTechnology";
import MalwareTypesAndThreats from "../pages/blogs/malwareTypesAndThreats";
import SystemRestoreRollingBackWindows from "../pages/blogs/systemRestoreRollingBackWindows";
import BootloadersAndStartup from "../pages/blogs/bootloadersAndStartup";
import MotherboardChipsetsTheTrafficControllerOfYourComputer from "../pages/blogs/motherboardChipsetsTheTrafficControllerOfYourComputer";
import RefreshRateWhyHighHertzDisplaysFeelSmoother from "../pages/blogs/refreshRateWhyHighHertzDisplaysFeelSmoother";
import ThermalThrottling from "../pages/blogs/thermalThrottling";
import ProcessesAndThreadsHowOperatingSystemsRunPrograms from "../pages/blogs/processesAndThreadsHowOperatingSystemsRunPrograms";
import RaceConditions from "../pages/blogs/raceConditions";
import StackVsHeapMemoryHowProgramsUseMemory from "../pages/blogs/stackVsHeapMemoryHowProgramsUseMemory";
import ChecksumsDetectingErrorsInData from "../pages/blogs/checksumsDetectingErrorsInData";
import FirewallsTheSecurityGateOfANetwork from "../pages/blogs/firewallsTheSecurityGateOfANetwork";
import SslVsTlsTheEvolutionOfSecureWebEncryption from "../pages/blogs/sslVsTlsTheEvolutionOfSecureWebEncryption";
import ContentDeliveryNetworksHowTheInternetDeliversContentFaster from "../pages/blogs/contentDeliveryNetworksHowTheInternetDeliversContentFaster";
import CorsCrossOriginResourceSharing from "../pages/blogs/corsCrossOriginResourceSharing";
import FullVsIncrementalVsDifferentialBackups from "../pages/blogs/fullVsIncrementalVsDifferentialBackups";
import CookiesVsSessionsHowWebsitesRememberYou from "../pages/blogs/cookiesVsSessionsHowWebsitesRememberYou";

export const blogRegistry = [
    {
        title: "BIOS and UEFI - How a Computer Actually Starts",
        path: "/blog/bios-and-uefi-how-a-computer-starts",
        thumbnail: "bios-uefi.webp",
        date: "Jan 05, 2025",
        component: <BiosAndUefiHowAComputerActuallyStarts />,
    },
    {
        title: "RAM vs Storage - Why Your Computer Needs Both",
        path: "/blog/ram-vs-storage-why-computers-need-both",
        thumbnail: "ram-storage.webp",
        date: "Jan 19, 2025",
        component: <RamVsStorageWhyYourComputerNeedsBoth />,
    },
    {
        title: "Compiler vs Interpreter vs Assembler - How Programs Become Machine Code",
        path: "/blog/compiler-interpreter-assembler-how-programs-run",
        thumbnail: "compiler.webp",
        date: "Feb 02, 2025",
        component: (
            <CompilerVsInterpreterVsAssemblerHowProgramsBecomeMachineCode />
        ),
    },
    {
        title: "The Kernel - The Most Important Part of an Operating System",
        path: "/blog/the-kernel-heart-of-operating-system",
        thumbnail: "kernel.webp",
        date: "Feb 16, 2025",
        component: <TheKernelTheMostImportantPartOfAnOperatingSystem />,
    },
    {
        title: "Device Drivers - How Hardware Talks to Software",
        path: "/blog/device-drivers-how-hardware-talks-to-software",
        thumbnail: "drivers.webp",
        date: "Mar 02, 2025",
        component: <DeviceDriversHowHardwareTalksToSoftware />,
    },
    {
        title: "Virtual Machines - Running Multiple Operating Systems on One Computer",
        path: "/blog/virtual-machines-running-multiple-os",
        thumbnail: "virtual-machines.webp",
        date: "Mar 16, 2025",
        component: (
            <VirtualMachinesRunningMultipleOperatingSystemsOnOneComputer />
        ),
    },
    {
        title: "ISO Files - The Standard Format for System Images",
        path: "/blog/iso-files-system-images",
        thumbnail: "iso-files.webp",
        date: "Mar 30, 2025",
        component: <IsoFilesTheStandardFormatForSystemImages />,
    },
    {
        title: "Quick Format vs Full Format - What Really Happens to Your Drive",
        path: "/blog/quick-format-vs-full-format",
        thumbnail: "quick-format.webp",
        date: "Apr 13, 2025",
        component: <QuickFormatVsFullFormat />,
    },
    {
        title: "DNS - The System That Turns Website Names into IP Addresses",
        path: "/blog/dns-how-domain-names-work",
        thumbnail: "dns.webp",
        date: "Apr 27, 2025",
        component: <DnsHowDomainNamesWork />,
    },
    {
        title: "Encryption vs Hashing - Protecting Data in Different Ways",
        path: "/blog/encryption-vs-hashing",
        thumbnail: "encryption-hashing.webp",
        date: "May 11, 2025",
        component: <EncryptionVsHashing />,
    },
    {
        title: "APIs - How Different Applications Communicate",
        path: "/blog/apis-how-applications-communicate",
        thumbnail: "apis.webp",
        date: "May 25, 2025",
        component: <ApisHowDifferentApplicationsCommunicate />,
    },
    {
        title: "Unicode and UTF-8 - How Computers Represent Text",
        path: "/blog/unicode-and-utf8",
        thumbnail: "unicode.webp",
        date: "Jun 08, 2025",
        component: <UnicodeAndUtf8HowComputersRepresentText />,
    },
    {
        title: "Open Source Software - Why Collaboration Powers Technology",
        path: "/blog/open-source-software",
        thumbnail: "open-source.webp",
        date: "Jun 22, 2025",
        component: <OpenSourceSoftwareWhyCollaborationPowersTechnology />,
    },
    {
        title: "Malware, Spyware, Trojans and Ransomware - Understanding Cyber Threats",
        path: "/blog/malware-types-and-threats",
        thumbnail: "malware.webp",
        date: "Jul 06, 2025",
        component: <MalwareTypesAndThreats />,
    },
    {
        title: "System Restore - Rolling Back Windows to a Working State",
        path: "/blog/system-restore",
        thumbnail: "system-restore.webp",
        date: "Jul 20, 2025",
        component: <SystemRestoreRollingBackWindows />,
    },
    {
        title: "Bootloaders - The Program That Starts Your Operating System",
        path: "/blog/bootloaders-and-startup",
        thumbnail: "bootloaders.webp",
        date: "Aug 03, 2025",
        component: <BootloadersAndStartup />,
    },
    {
        title: "Motherboard Chipsets - The Traffic Controller of Your Computer",
        path: "/blog/motherboard-chipsets",
        thumbnail: "motherboard.webp",
        date: "Aug 17, 2025",
        component: <MotherboardChipsetsTheTrafficControllerOfYourComputer />,
    },
    {
        title: "Refresh Rate - Why High Hertz Displays Feel Smoother",
        path: "/blog/refresh-rate-displays",
        thumbnail: "refresh-rate.webp",
        date: "Aug 31, 2025",
        component: <RefreshRateWhyHighHertzDisplaysFeelSmoother />,
    },
    {
        title: "Thermal Throttling - Why CPUs Slow Down When They Get Hot",
        path: "/blog/thermal-throttling",
        thumbnail: "thermal-throttling.webp",
        date: "Sep 14, 2025",
        component: <ThermalThrottling />,
    },
    {
        title: "Processes and Threads - How Operating Systems Run Programs",
        path: "/blog/processes-and-threads",
        thumbnail: "processes-threads.webp",
        date: "Sep 28, 2025",
        component: <ProcessesAndThreadsHowOperatingSystemsRunPrograms />,
    },
    {
        title: "Race Conditions - When Timing Breaks Your Program",
        path: "/blog/race-conditions",
        thumbnail: "race-conditions.webp",
        date: "Oct 12, 2025",
        component: <RaceConditions />,
    },
    {
        title: "Stack vs Heap Memory - How Programs Use Memory",
        path: "/blog/stack-vs-heap-memory",
        thumbnail: "stack-heap.webp",
        date: "Oct 26, 2025",
        component: <StackVsHeapMemoryHowProgramsUseMemory />,
    },
    {
        title: "Checksums - Detecting Errors in Data",
        path: "/blog/checksums",
        thumbnail: "checksums.webp",
        date: "Nov 09, 2025",
        component: <ChecksumsDetectingErrorsInData />,
    },
    {
        title: "Firewalls - The Security Gate of a Network",
        path: "/blog/firewalls",
        thumbnail: "firewalls.webp",
        date: "Nov 23, 2025",
        component: <FirewallsTheSecurityGateOfANetwork />,
    },
    {
        title: "SSL vs TLS - The Evolution of Secure Web Encryption",
        path: "/blog/ssl-vs-tls",
        thumbnail: "ssl-tls.webp",
        date: "Dec 07, 2025",
        component: <SslVsTlsTheEvolutionOfSecureWebEncryption />,
    },
    {
        title: "Content Delivery Networks - How the Internet Delivers Content Faster",
        path: "/blog/content-delivery-networks",
        thumbnail: "cdn.webp",
        date: "Dec 21, 2025",
        component: (
            <ContentDeliveryNetworksHowTheInternetDeliversContentFaster />
        ),
    },
    {
        title: "FAT32, NTFS and exFAT - Understanding File Systems",
        path: "/blog/fat32-ntfs-exfat-understanding-file-systems",
        thumbnail: "file-systems.webp",
        date: "Jan 04, 2026",
        component: <Fat32NtfsExfatUnderstandingFileSystems />,
    },
    {
        title: "Source Code to Machine Code - How Software Actually Runs",
        path: "/blog/source-code-to-machine-code",
        thumbnail: "source-to-machine-code.webp",
        date: "Jan 18, 2026",
        component: <SourceCodeToMachineCode />,
    },
    {
        title: "Cache Memory - Why CPUs Need Ultra Fast Memory",
        path: "/blog/cache-memory-why-cpus-need-fast-memory",
        thumbnail: "cache-memory.webp",
        date: "Feb 01, 2026",
        component: <CacheMemoryWhyCpusNeedFastMemory />,
    },
    {
        title: "Cross Origin Resource Sharing - Why Browsers Block Some Requests",
        path: "/blog/cors-cross-origin-resource-sharing",
        thumbnail: "cors.webp",
        date: "Feb 15, 2026",
        component: <CorsCrossOriginResourceSharing />,
    },
    {
        title: "Full vs Incremental vs Differential Backups",
        path: "/blog/full-incremental-differential-backups",
        thumbnail: "backups.webp",
        date: "Mar 01, 2026",
        component: <FullVsIncrementalVsDifferentialBackups />,
    },
    {
        title: "Cookies vs Sessions - How Websites Remember You",
        path: "/blog/cookies-vs-sessions-how-websites-remember-you",
        thumbnail: "cookies-sessions.webp",
        date: "Mar 12, 2026",
        component: <CookiesVsSessionsHowWebsitesRememberYou />,
    },
];
