const NavigationBar = () => {
  return (
    <nav className="bg-slate-950 text-white p-4 flex justify-end">
      <ul className="flex space-x-8 mr-8">
        <li>
          <a href="/">Dashboard</a>
        </li>
        <li>
          <a href="/challenges">Challenges</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
