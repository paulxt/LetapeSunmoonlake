import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';


const RouteGpx = ({language}) => {
    return (
      <section className="route-gpx">
        <h5><span>{language === "Chinese" ? "" : ""}GPX地圖</span></h5>
        <Container>
          <Row className='align-items-center'>
            <Col md={3}>
            <h3 className='text-center'><a href="/#">{language === "Chinese" ? "★點我下載GPX檔★" : "★Tap to download GPX★"}</a></h3>
              <h4 className='text-center'>{language === "Chinese" ? "如何匯入GPX檔至Google Maps？三步驟輕鬆做！" : "How to import GPX to your Google Maps?"}</h4>
              <div className="gpx-bx">
                <p>❶ Step 1.</p>
                <p>{language === "Chinese" ? "登入 GoogleMaps 點選畫面左上位於「GoogleMy Maps」左邊的選單，點選「建立新地圖」" : `Log in to Google Maps and click the menu located at the top left next to "Google My Maps". Then, select "Create a new map.`}</p>
              </div>
              <div className="gpx-bx">
                <p>❷ Step 2.</p>
                <p>{language === "Chinese" ? "點選「匯入」，找到你取得的 GPX 檔案，將 GPX 檔案匯入。點選「無標題的 地圖」輸入正確名稱。" : `Click "Import", find the GPX file you obtained, and import the GPX file. Click "Untitled map" and enter the correct name.`}</p>
              </div>
              <div className="gpx-bx">
                <p>❸ Step 3.</p>
                <p>{language === "Chinese" ? "啟動手機 GoogleMap APP，點選在畫面下方中間的 「已儲存 」 ，將上面的清單向左滑動找出地圖" : `Open the Google Maps app on your phone, tap "Saved" at the bottom center of the screen, and swipe the list at the top to the left to find your map.`}</p>
              </div>
            </Col>
            <Col md={9} className='gpx-map'>
              <iframe title="29kTheRide"src="https://ridewithgps.com/embeds?type=route&id=47303692&title=29K%20The%20Ride%20&sampleGraph=true&distanceMarkers=true&showPhotos=true"
                ></iframe>
            </Col>
          </Row>
        </Container>
      </section>
    )
}


export default RouteGpx