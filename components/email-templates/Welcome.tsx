import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface JobbexWelcomeProps {
  firstName: string;
  userId: string | number;
}

const baseUrl = process.env.jobbex_url;

const JobbexWelcomeEmail = ({ firstName, userId }: JobbexWelcomeProps) => (
  <Html>
    <Head />
    <Preview>
      The sales intelligence platform that helps you uncover qualified leads.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading color="#00b074" mx="auto" as="h2">
          Jobbex Nigeria Team
        </Heading>
        <Text style={paragraph}>Hi {firstName},</Text>
        <Text style={paragraph}>
          Welcome to Jobbex Nigeria. To continue using Jobbex Nigeria, please
          verify your email account by clicking the link below.
        </Text>
        <Section style={btnContainer}>
          <Button
            style={button}
            href={
              baseUrl +
              `?verify=true&userid=${userId}&token=${process.env.verify_user_token}`
            }
          >
            Verify Email
          </Button>
        </Section>
        <Text style={paragraph}>
          Best,
          <br />
          Jobbex Nigeria
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          470 Noor Ave STE B #1148, South San Francisco, CA 94080
        </Text>
      </Container>
    </Body>
  </Html>
);

export default JobbexWelcomeEmail;

const heading = {
  color: "#00b074",
  textAlign: "center",
};
const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#00b074",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
