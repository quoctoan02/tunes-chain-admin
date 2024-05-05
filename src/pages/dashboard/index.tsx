import React, {useMemo} from "react";

import { useCustom } from "@refinedev/core";

import { Col, Row } from "antd";

import {
  DashboardTotalCountCard,
} from "./components";
import {LineChart} from "@/pages/dashboard/components/line-chart";
import {useGetOverview} from "@/hooks/useGetOverview";
import {MdOutlinePeopleAlt} from "react-icons/md";
import {FaUserCheck} from "react-icons/fa";

export const DashboardPage: React.FC = () => {
    // const { data: dataPointAnalytics, isLoading } = useGetOverview()
    // const transformedData = useMemo(() => {
    //
    // }, [])
  return (
    <div className="page-container">
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={24} xl={6}>
          <DashboardTotalCountCard
            resource="artists"
            isLoading={false}
            totalCount={100}
          />
        </Col>
        <Col xs={24} sm={24} xl={6}>
          <DashboardTotalCountCard
            resource="users"
            isLoading={false}
            totalCount={100}
          />
        </Col>
        <Col xs={24} sm={24} xl={6}>
          <DashboardTotalCountCard
            resource="songs"
            isLoading={false}
            totalCount={100}
          />
        </Col>
        <Col xs={24} sm={24} xl={6}>
          <DashboardTotalCountCard
            resource="transactions"
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
          xl={12}
          style={
            {
              // height: "432px",
            }
          }
        >
          <LineChart label={"Artists"} icon={<FaUserCheck />} />
        </Col>
        <Col
          xs={24}
          sm={24}
          xl={12}
          style={
            {
              // height: "432px",
            }
          }
        >
          <LineChart label={"Users"} icon={<MdOutlinePeopleAlt size={18} />} />
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
          xl={12}
          style={
            {
              // height: "432px",
            }
          }
        >
          <LineChart label={"Songs"} />
        </Col>
        <Col
          xs={24}
          sm={24}
          xl={12}
          style={
            {
              // height: "432px",
            }
          }
        >
          <LineChart label={"Transactions"} />
        </Col>
      </Row>
    </div>
  );
};
