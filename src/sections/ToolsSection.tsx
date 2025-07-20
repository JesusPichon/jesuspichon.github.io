function ToolsSection() {
  const tools: string[] = [
    "SpringBoot",
    "Hibernate",
    "Postgres",
    "React",
    "Express",
    "Cobol",
    "PHP",
    "Python",
  ];

  return (
    <div className="bg-gradient-to-r from-[#051D35] to-[#050E17] p-4">
      <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {tools.map((tool, index) => (
          <li
            key={index}
            className="text-xl sm:text-xl text-white text-center font-bold">
            {tool}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToolsSection;
