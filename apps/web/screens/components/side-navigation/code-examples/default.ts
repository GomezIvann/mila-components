import { SideNavigation } from "mila-components";

const code = `() => {
  const xIcon = (
    <svg width="256" height="256" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="40" fill="currentColor" />
      <path
        d="M140.192 118.205L187.848 64H176.556L135.158 111.056L102.117 64H64L113.975 135.163L64 192H75.2914L118.982 142.296L153.883 192H192L140.192 118.205ZM124.722 135.787L119.65 128.697L79.3634 72.3294H96.7094L129.232 117.837L134.282 124.927L176.551 184.076H159.205L124.722 135.787Z"
        fill="white"
      />
    </svg>
  );

  const appsIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
      <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z" />
    </svg>
  );

  const homeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
      <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
    </svg>
  );

  const items = [
    {
      items: [
        { label: "Home", href: "/home", icon: homeIcon, selected: true },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", href: "/blog" },
        { label: "Documentation", href: "/documentation" },
        {
          label: "Apps",
          icon: appsIcon,
          items: [
            { label: "App 1", href: "/app-1" },
            { label: "App 2", href: "/app-2" },
            { label: "App 3", href: "/app-3" },
          ],
        },
      ],
    },
    {
      title: "Social",
      items: [
        { label: "Twitter", href: "https://twitter.com/", icon: xIcon, external: true },
      ],
    },
    {
      items: [{ label: "GitHub", href: "https://github.com/", external: true }],
    },
  ];

  return (
    <SideNavigation 
      items={items} 
      onNavigate={(href) => { 
        alert(href);
      }}
      title={{ text: "Mila components", href: "#" }}
    />
  );
}`;

const scope = { SideNavigation };

export default { code, scope };
