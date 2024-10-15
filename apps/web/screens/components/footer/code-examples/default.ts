import { ActionButton, Flex, Footer } from "mila-components";

const code = `() => {
  const xIcon = (
    <svg width="256" height="256" viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <rect width="256" height="256" rx="40" fill="#0F1419" />
      <path
        d="M140.192 118.205L187.848 64H176.556L135.158 111.056L102.117 64H64L113.975 135.163L64 192H75.2914L118.982 142.296L153.883 192H192L140.192 118.205ZM124.722 135.787L119.65 128.697L79.3634 72.3294H96.7094L129.232 117.837L134.282 124.927L176.551 184.076H159.205L124.722 135.787Z"
        fill="white"
      />
    </svg>
  );

  return (
    <Footer
      content={
        <Flex gap={8}>
          <ActionButton onClick={() => {}}>Pricing</ActionButton>
          <ActionButton onClick={() => {}}>Contact</ActionButton>
        </Flex>
      }
      copyright="© 2024 Mila"
      links={[
        { label: "Terms of service", href: "#" },
        { label: "Privacy policy", href: "#" },
      ]}
      socialIcons={[ { icon: xIcon, href: "#", title: "X logo" } ]}
      title={{ text: "Mila components" }}
    />
  );
}`;

const scope = { ActionButton, Flex, Footer };

export default { code, scope };
