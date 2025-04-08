import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const { Text, Title } = Typography;

const News = () => {
  const { data } = useGetCryptoNewsQuery();
  
    const { data: cryptoNews } = useGetCryptoNewsQuery();
    if (!data) return <Loader />; 
  

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews?.data?.map((item) => (
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable className="news-card">
            <a href={item.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{item.title}</Title>
                <img src={item.thumbnail} width="100px" alt="" />
              </div>
              <p>{item.description.length > 150 ? `${item.description.substring(0, 150)}...` : item.description}</p>
              <div className="provider-container">
                
                <Text>{moment(item.createdAt).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
