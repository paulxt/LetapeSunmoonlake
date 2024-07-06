import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'


interface ImagesProps {
    data: {
        src: string,
    }[];
    onClick: (index: number) => void;
}



const Photo: FC<ImagesProps> = (props) => {

    const { data, onClick } = props;
    const handleClick = (index:number) => {
        onClick(index);
    }

    return (
        <Row className='align-items-center'>
            {
                data.map((slide, index) => (
                    <Col size={12} sm={6} md={4} lg={3} key={index}
                        onClick={() => handleClick(index)} className='mb-3'>
                        <div className="img-bx">
                            <img src={slide.src} alt="" />
                        </div>
                    </Col>      
                ))
            }
        </Row>
        
    )
}

export default Photo