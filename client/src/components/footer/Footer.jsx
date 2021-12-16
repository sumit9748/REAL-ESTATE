import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';


const Container=styled.div`display:flex;`
const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;
`
const ContactItem=styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
`
const Payment=styled.img`
width:50%;
`


const Logo=styled.h1``
const Desc=styled.p`
margin:20px 0;`
const SocialContainer=styled.div`
display:flex;`
const SocialIcon=styled.div`
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:20px;
`


const Center=styled.div`
flex:1;
padding:20px;
`
const Title=styled.h3`
margin-bottom:30px;`
const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;`
const ListItem=styled.li`
width:50%;
margin-bottom:10px;`



const Right=styled.div`
flex:1;
padding:20px;`



export const Footer = () => {
    return (
        <Container>
            <Left>
            <Logo>Acre-State</Logo>
            <Desc>Our Belive is Our support and our Honesty is prove that</Desc>
                <SocialContainer>
                    <SocialIcon color="33B599">
                    <FacebookIcon/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                    <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Buy</ListItem>
                    <ListItem>Sell</ListItem>
                    <ListItem>Flat</ListItem>
                    <ListItem>Rent</ListItem>
                    <ListItem>Tour</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms & Conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>
                    Contact
                </Title>
                <ContactItem><HomeIcon style={{marginRight:"10px"}}/>𝔅𝔞𝔫𝔨𝔯𝔞 𝔇𝔞𝔨𝔰𝔥𝔦𝔫𝔓𝔞𝔩𝔩𝔶 ℌ𝔬𝔴𝔯𝔞𝔥</ContactItem>
                <ContactItem>< PhoneAndroidIcon style={{marginRight:"10px"}}/>+91 9748698484</ContactItem>
                <ContactItem><EmailIcon style={{marginRight:"10px"}}/>sumitmondal9448@gmail.com</ContactItem>
                <Payment src="https://store-cdn.arduino.cc/uni/wysiwyg/Payment_Options.jpg"/>
            </Right>
        </Container>
    )
}
export default Footer;