import React, { Component } from 'react';
import { Layout, Row, Col, Button} from 'antd';
import '../style/ZLayout.css'

import mainPic from '../images/mainPage.png';

const { Header, Footer, Content } = Layout;

const zokoStmtHeader = "Sell More via Chat Apps"
const zokoStmt = "If you know how to upload pictures and chat, then you can start selling online today. Zoko is a web application that does everything else for you."

class ZLayout extends Component {


  render() {
    return (
      <div>
      <Layout style={{ background: '#fff'}} >
        <Header style={{height: '80px', lineHeight: '80px', background: '#fff', position: 'fixed', zIndex: '100', width: '100%', boxShadow: '0 2px 2px -2px rgba(0,0,0,.15)'}}>
          <Row>
            <Col span={8}></Col>
            <Col span={8} style={{textAlign: 'center'}}><font size='40'>ZOKO</font></Col>
            <Col span={8} style={{textAlign: 'right'}}><Button>Sign in</Button></Col>
          </Row>
        </Header>
        <Layout style={{ background: '#fff'}} >
          <div style={{ background: '#fff', minHeight: 280, marginTop: '100px'}}>
          <Content>
          <Row>
            <Col span={12} style={{textAlign: 'center', verticalAlign: 'middle'}}>
            <div id='statementDiv' style={{minHeight: 280, minWidth:'100%', maxWidth: '100%', height: 'auto', padding: '50px'}}>
              <h2>{zokoStmtHeader} </h2>
              <h4>{zokoStmt}</h4>
              <br></br>
            <Button type='primary' size='large'>Sign Up</Button>
            </div>
            </Col>
            <Col span={12}>
              <img src={mainPic} alt='main page missing' style={{minWidth:'100%', maxWidth: '100%', height: 'auto'}}/></Col>
          </Row>
          </Content>
          </div>
        </Layout>
        <Layout>
          <div style={{ background: '#aaa', padding: 24, minHeight: 280 }}>
          <Content>
          Test content data
          </Content>
          </div>
        </Layout>
        <Layout>
          <div style={{ background: '#aaa', padding: 24, minHeight: 280 }}>
          <Content>
          Test content data
          </Content>
          </div>
        </Layout>
        <Layout>
          <div style={{ background: '#aaa', padding: 24, minHeight: 280 }}>
          <Content>
          Test content data
          </Content>
          </div>
        </Layout>
        <Footer>footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default ZLayout;
