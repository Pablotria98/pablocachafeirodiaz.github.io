export type ExperienceItem = {
    title: string;
    company: string;
    from: string;
    to: string;
    description: string;
};

export const experience: ExperienceItem[] = [
    {
        title: "Cybersecurity Automation Expert",
        company: "SecureOps Inc.",
        from: "2021",
        to: "Present",
        description:
            "Developed automated security monitoring tools, improved vulnerability scanning processes, and collaborated with DevOps teams to integrate security into CI/CD.",
    },
    {
        title: "Security Analyst",
        company: "Company ABC",
        from: "2019",
        to: "2021",
        description:
            "Conducted security assessments, managed incident response, and implemented security policies and procedures.",
    },
];
