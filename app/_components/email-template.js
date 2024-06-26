import * as React from 'react';
import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
} from '@react-email/components';

export const EmailTemplate = ({
    responce,
}) => (
    <Html>
        <Head />
        <Preview>File Shared With You</Preview>
        <Body style={main}>
            <Container>
                <Section style={content}>
                    <Row style={{ paddingBottom: '0' }}>
                        <Column>
                            <Heading
                                style={{
                                    fontSize: 32,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                }}
                            >
                                Hi {responce?.emailToSend?.split("@")[0]},
                            </Heading>
                            <Heading
                                as="h2"
                                style={{
                                    fontSize: 26,
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                }}
                            >
                                File Shared with You
                            </Heading>

                            <Text style={paragraph}>
                                <b>File Name: {responce.fileName}</b>
                            </Text>
                            <Text style={{ marginTop: -5 }}>
                                <b>File Size: {(responce.fileSize / 1024 / 1024).toFixed(2)} MB</b>
                            </Text>
                            <Text style={{ marginTop: -5 }}>
                                <b>File Type: {responce.fileType}</b>
                            </Text>
                            <Text
                                style={{
                                    color: 'rgb(0,0,0, 0.5)',
                                    fontSize: 14,
                                    marginTop: -5,
                                }}
                            >
                                *Access and Download file at your own risk
                            </Text>

                            <Text style={paragraph}>
                                Now you can also share files with CustoCloud FileShare
                            </Text>
                            <Text style={{ marginTop: -5 }}>
                                Click Below Button to Access your file
                            </Text>
                        </Column>
                    </Row>

                    <a href={responce?.shortUrl} style={link}>Click To Download</a>
                    <Row style={{ paddingTop: '0' }}>
                        <Column style={containerButton} colSpan={2}>
                            <Button style={button}
                                href={responce?.shortUrl}
                            >Click here to Download</Button>
                        </Column>
                    </Row>
                </Section>

                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 12,
                        color: 'rgb(0,0,0, 0.7)',
                    }}
                >
                    © 2024 | CustoCloud @2024 Copyrights
                    | https://custos-cloud.vercel.app/
                </Text>
            </Container>
        </Body>
    </Html>
);

const main = {
    backgroundColor: '#fff',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    padding: '20px',
};

const paragraph = {
    fontSize: 16,
    marginBottom: '10px',
};

const logo = {
    padding: '30px 20px',
};

const containerButton = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
};

const button = {
    backgroundColor: '#e00707',
    padding: '12px 30px',
    borderRadius: 3,
    color: '#FFF',
    fontWeight: 'bold',
    border: '1px solid rgb(0,0,0, 0.1)',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
};

const content = {
    border: '1px solid rgb(0,0,0, 0.1)',
    borderRadius: '3px',
    overflow: 'hidden',
    padding: '20px',
};

const link = {
    textDecoration: 'none',
    color: 'blue',
    fontSize: '14px',
    display: 'block',
    margin: '10px 0',
};

const boxInfos = {
    padding: '20px 40px',
};

const containerImageFooter = {
    padding: '45px 0 0 0',
};

export default EmailTemplate;
