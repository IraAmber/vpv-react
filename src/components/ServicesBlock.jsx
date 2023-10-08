import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css' // Стилі для react-tabs
import Service from './Service' // Імпорт компоненту послуги

const ServicesBlock = () => {
  const servicesData = [
    {
      title: 'Послуга 1',
      description: 'Короткий опис послуги 1',
      advantages: ['Перевага 1', 'Перевага 2', 'Перевага 3'],
      image:
        'https://makedon.com.ua/img/services_consultation-illustration.svg',
    },
    {
      title: 'Послуга 2',
      description: 'Короткий опис послуги 2',
      advantages: ['Перевага 1', 'Перевага 2', 'Перевага 3'],
      image: 'https://makedon.com.ua/img/services_audit-illustration.svg',
    },
    {
      title: 'Послуга 3',
      description: 'Короткий опис послуги 3',
      advantages: ['Перевага 1', 'Перевага 2', 'Перевага 3'],
      image: 'https://makedon.com.ua/img/services_shop-illustration.svg',
    },
    {
      title: 'Послуга 4',
      description: 'Короткий опис послуги 4',
      advantages: ['Перевага 1', 'Перевага 2', 'Перевага 3'],
      image: 'https://makedon.com.ua/img/services_corporat-illustration.svg',
    },
    {
      title: 'Послуга 5',
      description: 'Короткий опис послуги 5',
      advantages: ['Перевага 1', 'Перевага 2', 'Перевага 3'],
      image: 'https://makedon.com.ua/img/services_landing-illustration.svg',
    },
    {
      title: 'Послуга 6',
      description: 'Короткий опис послуги 6',
      advantages: ['Перевага 1', 'Перевага 2', 'Перевага 3'],
      image: 'https://makedon.com.ua/img/services_shop-illustration.svg',
    },
  ]

  return (
    <section className="services">
      <div className="container">
        <Tabs>
          <TabList className="services-tab">
            {servicesData.map((service, index) => (
              <Tab key={index}>{service.title}</Tab>
            ))}
          </TabList>

          {servicesData.map((service, index) => (
            <TabPanel key={index}>
              <Service {...service} />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default ServicesBlock
