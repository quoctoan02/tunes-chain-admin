import React from "react";

import { useCustom } from "@refinedev/core";

import { Col, Row } from "antd";

import {
  DashboardTotalCountCard,
} from "./components";

export const DashboardPage: React.FC = () => {
  // const { data, isLoading } = useCustom<DashboardTotalCountsQuery>({
  //   url: "",
  //   method: "get",
  //   meta: { gqlQuery: DASHBOARD_TOTAL_COUNTS_QUERY },
  // });

  return (
    <div className="page-container">
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="companies"
            isLoading={false}
            totalCount={100}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="contacts"
            isLoading={false}
            totalCount={100}
          />
        </Col>
        <Col xs={24} sm={24} xl={8}>
          <DashboardTotalCountCard
            resource="deals"
            isLoading={false}
            totalCount={100}
          />
        </Col>
      </Row>

      <Row
        gutter={[32, 32]}
        style={{
          marginTop: "32px",
        }}
      >
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: "432px",
          }}
        >
          {/*<DashboardTotalRevenueChart />*/}
        </Col>
        <Col
          xs={24}
          sm={24}
          xl={16}
          style={{
            height: "432px",
          }}
        >
          {/*<DashboardDealsChart />*/}
        </Col>
      </Row>

      <Row
        gutter={[32, 32]}
        style={{
          marginTop: "32px",
        }}
      >
        <Col
          xs={24}
          sm={24}
          xl={8}
          style={{
            height: "448px",
          }}
        >
          {/*<DashboardTasksChart />*/}
        </Col>
        <Col
          xs={24}
          sm={24}
          xl={16}
          style={{
            height: "448px",
          }}
        >
        </Col>
      </Row>
    </div>
  );
};
