
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";

export default () => {
  return (
    <div className="pl_15"> 

      <Row className="justify-content-md-center mt-4">  

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget
            title="Available hours this month"
            data={trafficShares}
            subTitle="250 hrs / 300 hrs"
            persent="30%"
             />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
             
          <CircleChartWidget
            title="Total Material Expense"
            data={trafficShares}
            subTitle="250 hrs / 300 hrs"
            persent="30%"
             />
        </Col>
      </Row> 
    </div>
  );
};
