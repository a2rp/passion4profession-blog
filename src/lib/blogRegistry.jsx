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
        excerpt: "Before Windows, Linux, or any operating system appears on the screen, your computer first runs a low level startup system stored on the motherboard. Older systems use BIOS. Most modern systems use...",
        component: <BiosAndUefiHowAComputerActuallyStarts />,
    },
    {
        title: "RAM vs Storage - Why Your Computer Needs Both",
        path: "/blog/ram-vs-storage-why-computers-need-both",
        thumbnail: "ram-storage.webp",
        date: "Jan 19, 2025",
        excerpt: "One of the most common beginner confusions in computing is this - if a laptop says 8 GB RAM and 512 GB SSD, what do those numbers actually mean? RAM and storage are both important, but they do...",
        component: <RamVsStorageWhyYourComputerNeedsBoth />,
    },
    {
        title: "Compiler vs Interpreter vs Assembler - How Programs Become Machine Code",
        path: "/blog/compiler-interpreter-assembler-how-programs-run",
        thumbnail: "compiler.webp",
        date: "Feb 02, 2025",
        excerpt: "Computers do not understand human style source code directly. They understand machine instructions. That is why compilers, interpreters and assemblers exist. These tools act like translators between...",
        component: (
            <CompilerVsInterpreterVsAssemblerHowProgramsBecomeMachineCode />
        ),
    },
    {
        title: "The Kernel - The Most Important Part of an Operating System",
        path: "/blog/the-kernel-heart-of-operating-system",
        thumbnail: "kernel.webp",
        date: "Feb 16, 2025",
        excerpt: "If the operating system is a city, the kernel is the control room that keeps everything working. It manages the processor, memory, devices and system level rules. Most programs never directly control...",
        component: <TheKernelTheMostImportantPartOfAnOperatingSystem />,
    },
    {
        title: "Device Drivers - How Hardware Talks to Software",
        path: "/blog/device-drivers-how-hardware-talks-to-software",
        thumbnail: "drivers.webp",
        date: "Mar 02, 2025",
        excerpt: "A computer is full of hardware like graphics chips, sound devices, printers, storage controllers, keyboards, webcams and network adapters. But hardware does not automatically understand what the...",
        component: <DeviceDriversHowHardwareTalksToSoftware />,
    },
    {
        title: "Virtual Machines - Running Multiple Operating Systems on One Computer",
        path: "/blog/virtual-machines-running-multiple-os",
        thumbnail: "virtual-machines.webp",
        date: "Mar 16, 2025",
        excerpt: "A virtual machine is like creating a computer inside your computer. It lets one physical machine run another operating system in an isolated virtual environment. This is one of the most useful ideas...",
        component: (
            <VirtualMachinesRunningMultipleOperatingSystemsOnOneComputer />
        ),
    },
    {
        title: "ISO Files - The Standard Format for System Images",
        path: "/blog/iso-files-system-images",
        thumbnail: "iso-files.webp",
        date: "Mar 30, 2025",
        excerpt: "If you have ever downloaded Windows, Linux, a recovery tool or a bootable utility, you have probably seen an ISO file. It is one of the most important file formats in the world of operating systems,...",
        component: <IsoFilesTheStandardFormatForSystemImages />,
    },
    {
        title: "Quick Format vs Full Format - What Really Happens to Your Drive",
        path: "/blog/quick-format-vs-full-format",
        thumbnail: "quick-format.webp",
        date: "Apr 13, 2025",
        excerpt: "Formatting a drive sounds simple, but many beginners do not know what the computer is actually doing behind the scenes. Quick format and full format are not identical. They both prepare storage for...",
        component: <QuickFormatVsFullFormat />,
    },
    {
        title: "DNS - The System That Turns Website Names into IP Addresses",
        path: "/blog/dns-how-domain-names-work",
        thumbnail: "dns.webp",
        date: "Apr 27, 2025",
        excerpt: "Every time you type a website name into a browser, a quiet background system helps your computer figure out where that website actually lives. That system is DNS. Without it, the web would be much...",
        component: <DnsHowDomainNamesWork />,
    },
    {
        title: "Encryption vs Hashing - Protecting Data in Different Ways",
        path: "/blog/encryption-vs-hashing",
        thumbnail: "encryption-hashing.webp",
        date: "May 11, 2025",
        excerpt: "Encryption and hashing are two of the most important concepts in computer security, but beginners often mix them up. They both transform data, yet their goals are very different. One is mainly for...",
        component: <EncryptionVsHashing />,
    },
    {
        title: "APIs - How Different Applications Communicate",
        path: "/blog/apis-how-applications-communicate",
        thumbnail: "apis.webp",
        date: "May 25, 2025",
        excerpt: "Modern software almost never works in isolation. Apps, websites, servers, databases, payment systems, maps, weather services and mobile clients constantly exchange data. APIs are the rules and...",
        component: <ApisHowDifferentApplicationsCommunicate />,
    },
    {
        title: "Unicode and UTF-8 - How Computers Represent Text",
        path: "/blog/unicode-and-utf8",
        thumbnail: "unicode.webp",
        date: "Jun 08, 2025",
        excerpt: "Letters look simple when humans read them, but computers cannot store text as visible letters directly. They need numbers, rules and consistent encoding systems. Unicode and UTF-8 are the main reason...",
        component: <UnicodeAndUtf8HowComputersRepresentText />,
    },
    {
        title: "Open Source Software - Why Collaboration Powers Technology",
        path: "/blog/open-source-software",
        thumbnail: "open-source.webp",
        date: "Jun 22, 2025",
        excerpt: "Open source software is one of the most important ideas in modern technology. It allows people to inspect source code, learn from it, improve it and build on top of shared work. Once you understand...",
        component: <OpenSourceSoftwareWhyCollaborationPowersTechnology />,
    },
    {
        title: "Malware, Spyware, Trojans and Ransomware - Understanding Cyber Threats",
        path: "/blog/malware-types-and-threats",
        thumbnail: "malware.webp",
        date: "Jul 06, 2025",
        excerpt: "In the world of cybersecurity, people often hear scary words like malware, spyware, trojan, and ransomware. They are related, but they do not all mean the same thing. Once you understand the...",
        component: <MalwareTypesAndThreats />,
    },
    {
        title: "System Restore - Rolling Back Windows to a Working State",
        path: "/blog/system-restore",
        thumbnail: "system-restore.webp",
        date: "Jul 20, 2025",
        excerpt: "System Restore is a Windows feature that lets you return your computer to an earlier working state. It can undo changes caused by problematic software installations, drivers or system updates without...",
        component: <SystemRestoreRollingBackWindows />,
    },
    {
        title: "Bootloaders - The Program That Starts Your Operating System",
        path: "/blog/bootloaders-and-startup",
        thumbnail: "bootloaders.webp",
        date: "Aug 03, 2025",
        excerpt: "A bootloader is one of the most important but least noticed parts of a computer's startup process. It sits between firmware and the operating system. Without it, your system would have power,...",
        component: <BootloadersAndStartup />,
    },
    {
        title: "Motherboard Chipsets - The Traffic Controller of Your Computer",
        path: "/blog/motherboard-chipsets",
        thumbnail: "motherboard.webp",
        date: "Aug 17, 2025",
        excerpt: "A motherboard chipset helps define how many important parts of a computer platform connect and work together. It is not the main brain like the CPU, but it plays a major supporting role in storage,...",
        component: <MotherboardChipsetsTheTrafficControllerOfYourComputer />,
    },
    {
        title: "Refresh Rate - Why High Hertz Displays Feel Smoother",
        path: "/blog/refresh-rate-displays",
        thumbnail: "refresh-rate.webp",
        date: "Aug 31, 2025",
        excerpt: "Refresh rate is one of the most important display ideas to understand if you want to know why some screens feel fluid and smooth while others feel more ordinary. Once you understand what 60 Hz, 120...",
        component: <RefreshRateWhyHighHertzDisplaysFeelSmoother />,
    },
    {
        title: "Thermal Throttling - Why CPUs Slow Down When They Get Hot",
        path: "/blog/thermal-throttling",
        thumbnail: "thermal-throttling.webp",
        date: "Sep 14, 2025",
        excerpt: "A processor wants to run fast, but it also needs to stay within safe temperature limits. When heat goes too high, the system reduces speed to protect the hardware. That protective slowdown is called...",
        component: <ThermalThrottling />,
    },
    {
        title: "Processes and Threads - How Operating Systems Run Programs",
        path: "/blog/processes-and-threads",
        thumbnail: "processes-threads.webp",
        date: "Sep 28, 2025",
        excerpt: "Every time you open an app, the operating system creates a running environment for it. That environment is called a process. Inside that process, the actual lines of execution are called threads....",
        component: <ProcessesAndThreadsHowOperatingSystemsRunPrograms />,
    },
    {
        title: "Race Conditions - When Timing Breaks Your Program",
        path: "/blog/race-conditions",
        thumbnail: "race-conditions.webp",
        date: "Oct 12, 2025",
        excerpt: "A race condition is one of the most important bug patterns in programming. It happens when the correctness of a program depends on timing or order in a way you did not safely control. The result is...",
        component: <RaceConditions />,
    },
    {
        title: "Stack vs Heap Memory - How Programs Use Memory",
        path: "/blog/stack-vs-heap-memory",
        thumbnail: "stack-heap.webp",
        date: "Oct 26, 2025",
        excerpt: "Memory is one of the most important parts of programming, but beginners often hear \"stack\" and \"heap\" as if they are magical secret caves. They are not. They are two different ways programs use RAM...",
        component: <StackVsHeapMemoryHowProgramsUseMemory />,
    },
    {
        title: "Checksums - Detecting Errors in Data",
        path: "/blog/checksums",
        thumbnail: "checksums.webp",
        date: "Nov 09, 2025",
        excerpt: "A checksum is a calculated value used to check whether data changed by accident. It is one of the simplest and most important ideas in storage, networking, downloads, backups and data integrity. If...",
        component: <ChecksumsDetectingErrorsInData />,
    },
    {
        title: "Firewalls - The Security Gate of a Network",
        path: "/blog/firewalls",
        thumbnail: "firewalls.webp",
        date: "Nov 23, 2025",
        excerpt: "A firewall is one of the most important security concepts in networking. It acts like a checkpoint that examines network traffic and applies rules to decide what should pass and what should be...",
        component: <FirewallsTheSecurityGateOfANetwork />,
    },
    {
        title: "SSL vs TLS - The Evolution of Secure Web Encryption",
        path: "/blog/ssl-vs-tls",
        thumbnail: "ssl-tls.webp",
        date: "Dec 07, 2025",
        excerpt: "When you open a secure website and see HTTPS, a lock icon, or a certificate warning, you are stepping into the world of SSL and TLS. Most people hear these terms but do not fully know what they do....",
        component: <SslVsTlsTheEvolutionOfSecureWebEncryption />,
    },
    {
        title: "Content Delivery Networks - How the Internet Delivers Content Faster",
        path: "/blog/content-delivery-networks",
        thumbnail: "cdn.webp",
        date: "Dec 21, 2025",
        excerpt: "A Content Delivery Network, or CDN, is a system of distributed servers placed in multiple locations around the world. Its purpose is simple - deliver content faster, closer and more efficiently to...",
        component: (
            <ContentDeliveryNetworksHowTheInternetDeliversContentFaster />
        ),
    },
    {
        title: "FAT32, NTFS and exFAT - Understanding File Systems",
        path: "/blog/fat32-ntfs-exfat-understanding-file-systems",
        thumbnail: "file-systems.webp",
        date: "Jan 04, 2026",
        excerpt: "A storage device is not useful just because it has space. It also needs a system that tells the computer how files should be stored, named, organized and found. That system is called a file system....",
        component: <Fat32NtfsExfatUnderstandingFileSystems />,
    },
    {
        title: "Source Code to Machine Code - How Software Actually Runs",
        path: "/blog/source-code-to-machine-code",
        thumbnail: "source-to-machine-code.webp",
        date: "Jan 18, 2026",
        excerpt: "When you write a program, the processor cannot directly understand your nicely written source code. Computers finally run machine level instructions, so your code has to travel through one or more...",
        component: <SourceCodeToMachineCode />,
    },
    {
        title: "Cache Memory - Why CPUs Need Ultra Fast Memory",
        path: "/blog/cache-memory-why-cpus-need-fast-memory",
        thumbnail: "cache-memory.webp",
        date: "Feb 01, 2026",
        excerpt: "Modern processors are incredibly fast. The problem is that fetching data from slower memory takes time. Cache memory exists to reduce that delay. It keeps frequently needed instructions and data very...",
        component: <CacheMemoryWhyCpusNeedFastMemory />,
    },
    {
        title: "Cross Origin Resource Sharing - Why Browsers Block Some Requests",
        path: "/blog/cors-cross-origin-resource-sharing",
        thumbnail: "cors.webp",
        date: "Feb 15, 2026",
        excerpt: "CORS is one of the most common things frontend developers run into when a website tries to call an API on another origin. It feels annoying at first, but once you understand origins, browser security...",
        component: <CorsCrossOriginResourceSharing />,
    },
    {
        title: "Full vs Incremental vs Differential Backups",
        path: "/blog/full-incremental-differential-backups",
        thumbnail: "backups.webp",
        date: "Mar 01, 2026",
        excerpt: "Backups are not just about making copies. They are about deciding how much data to copy, how often to copy it, how much storage to use, and how easy it should be to restore everything later. Full,...",
        component: <FullVsIncrementalVsDifferentialBackups />,
    },
    {
        title: "Cookies vs Sessions - How Websites Remember You",
        path: "/blog/cookies-vs-sessions-how-websites-remember-you",
        thumbnail: "cookies-sessions.webp",
        date: "Mar 12, 2026",
        excerpt: "Websites handle many separate requests, but users expect continuity. You log in once and expect the site to remember you on the next page, the next click and the next refresh. Cookies and sessions...",
        component: <CookiesVsSessionsHowWebsitesRememberYou />,
    },
];
