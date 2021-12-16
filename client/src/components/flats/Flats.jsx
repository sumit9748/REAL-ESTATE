import React from 'react'
import styled from "styled-components"
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import { flatItems } from '../../data';
import {Link} from "react-router-dom"
const Container = styled.div`
display:flex;
flex-direction:column;
padding:20px;
overflow-x:hidden;
`
const Title = styled.h1`
font-weight:bold;
font-size:50px;
text-align:center;
color:darkblue;
margin-bottom:20px;`
const FlatItems = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
const FlatItem = styled.div`
display:flex;
aligin-item:center;
margin-bottom:40px;
box-shadow: 24px 1px 38px 18px rgba(15,2,13,0.75);
-webkit-box-shadow: 24px 1px 38px 18px rgba(15,2,13,0.75);
-moz-box-shadow: 24px 1px 38px 18px rgba(15,2,13,0.75);
height:400px;
width:90%;
border-radius:20px;
`
const FlatImg = styled.div`
flex:2;
align-items:center;
justify-content:center;
`

const FlatItemInfo = styled.div`
flex:1;
display:flex;
flex-direction:column;
`
const H3 = styled.h3``

const Image = styled.img`

width:80%;
height:100%;
object-fit:cover;

`
const Desc = styled.span`
font-size:20px;
font-weight:600;
color:#555;
overflow:hidden;
text-overflow:ellipsis;`
const Contact = styled.div`
display:flex;
align-items:center;
margin-top:20px;
justify-content:space-around;
`
const Button=styled.button`
border:none;
border-radius:10px;
padding:7px;
font-size:16px;
background-color:black;
color:white;
cursor:pointer;
margin:10px 5px;
width:150px;`
export const Flats = () => {

    return (
        <Container>
            <Title>Our-Ides</Title>
            <FlatItems>
            {flatItems.map(flat=>(
                <FlatItem> 
                    <FlatImg>
                        <Image src={flat.img}/>
                    </FlatImg>

                    <FlatItemInfo>
                        <H3>{flat.title}</H3>
                        <Desc>{flat.desc}</Desc>
                        <Contact>
                            <Facebook />
                            <Twitter />
                            <Instagram />
                        </Contact>
                        <Link to={`/`+flat.type}>
                        <Button>{flat.type}</Button>
                        </Link>
                    </FlatItemInfo>
                   
                </FlatItem>
                  ))}
            </FlatItems>

        </Container>
    )
}
