import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface SkyShareRecoveryEmailProps {
    username?: string;
    userImage?: string;
    recoveryLink?: string;
}

export const SkyShareRecoveryEmail = ({ username, userImage, recoveryLink }: SkyShareRecoveryEmailProps) => {
    const previewText = `Hello ${username}, recently an account recovery request has been made for a SkyShare account registered with this email address`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="mx-auto my-auto px-2 bg-white font-sans">
                    <Container className="max-w-[465px] mx-auto my-[40px] p-[20px] text-[#020617] rounded-2xl border-solid border-2 border-slate-200">
                        <Section className="my-[32px]">
                            <Img src="/static/skyshare-logo.png" width="40" alt="SkyShare" className="mx-auto my-0" />
                        </Section>
                        <Text className="mt-[20px] text-sm leading-[24px]">
                            Hello {username},
                        </Text>
                        <Text className="text-sm leading-[24px]">
                            Recently an account recovery request has been made for a <strong>SkyShare</strong> account registered with this email address. To regain access to your account, use the button below to redefine your password.
                        </Text>
                        <Section className="mt-[32px]">
                            <Row>
                                <Column align="right">
                                    <Img className="mr-[8px] rounded-full" src={userImage} width="64" height="64" />
                                </Column>
                                <Column align="left">
                                    <Img className="ml-[8px] bg-slate-100 rounded-full border-solid border-2 border-slate-200 box-border" src="/static/recovery.png" width="64" height="64" />
                                </Column>
                            </Row>
                        </Section>
                        <Section className="text-center mt-[40px] mb-[16px]">
                            <Button className="px-6 py-3 bg-[#2681EB] text-sm text-center text-white font-semibold rounded-xl no-underline" href={recoveryLink}>
                                Reset password
                            </Button>
                        </Section>
                        <Text className="text-center text-[12px] text-[#64748b] leading-[20px]">
                            or copy and paste this URL into your browser:
                            <Link href={recoveryLink} className="block text-[#2681EB] no-underline">{recoveryLink}</Link>
                        </Text>
                        <Hr className="w-full mx-0 mt-[24px] mb-[12px] border border-solid border-[#E0E2E4]" />
                        <Section>
                            <Row>
                                <Column align="left">
                                    <Img src="/static/skyshare-logo.png" width="28" alt="SkyShare" className="mx-4" />
                                </Column>
                                <Column align="left" className="w-full">
                                    <Text className="text-lg font-bold">SkyShare</Text>
                                </Column>
                            </Row>
                        </Section>
                        <Text className="mx-2 text-[#666666] text-[12px] leading-[24px]">
                            If you did not request an account recovery for your SkyShare account then you can safely ignore this email. You may want to change your password just to be sure no one besides you have access to your account.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

SkyShareRecoveryEmail.PreviewProps = {
    username: "D3W10",
    userImage: "https://parsefiles.back4app.com/q9U4CU2MG3Dyu37gVmVSl8t7Jwshp4kZFbhweQ9S/3ce15d4d6657e2b986fcf823a370ed2e_photo.png",
    recoveryLink: "https://skyshare.netlify.app/"
} as SkyShareRecoveryEmailProps;

export default SkyShareRecoveryEmail;