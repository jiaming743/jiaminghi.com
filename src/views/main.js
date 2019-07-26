import React from 'react'
import styles from './mian.module.less'

import Register from '../components/Register'
import RetrievePassword from '../components/Register'

import { Tabs } from 'antd'
const { TabPane } = Tabs

export default () => {
  return (
    <div className={styles.main}>
      <Tabs type="card" defaultActiveKey="1">
        <TabPane tab="Register" key="1">
          <Register />
        </TabPane>
        <TabPane tab="Retrieve password" key="2">
          <RetrievePassword />
        </TabPane>
      </Tabs>
    </div>
  )
}