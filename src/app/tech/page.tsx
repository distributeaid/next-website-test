import HeroSection from "@/components/tech/HeroSection";
import SponsorSection from "@/components/tech/SponsorSection";
import OpenSourceExplorersSection from "@/components/tech/OpenSourceExporersSection";
import { Box, Flex, Section } from "@radix-ui/themes";
import { JoinTeam } from "@/components/tech/JoinTeam";

const page = () => {
  return (
    <Flex
      position="relative"
      width="100%"
      direction="column"
      align="center"
      justify="start"
      gap={{ initial: "4", lg: "6", xl: "9" }}
    >
      <Box
        width="100%"
        position="absolute"
        inset="0"
        height="450px"
        className="bg-navy-900 -z-10"
      />
      <Section>
        <HeroSection />
      </Section>
      <Section>
        <JoinTeam />
      </Section>

      <Section>
        <OpenSourceExplorersSection />
      </Section>
      <Section>
        <SponsorSection />
      </Section>
    </Flex>
  );
};

export default page;
