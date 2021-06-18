import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  Container,
  ContentWithPaddingXl,
} from "../../components/misc/Layouts.jsx";

// components
import { SectionHeadingtwo } from "../../components/misc/Headings.jsx";
import { PrimaryButton as PrimaryButtonBase } from "../../components/misc/Buttons.jsx";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import Search from "../../components/misc/Search.jsx";

// styled components with tailwind
const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeadingtwo)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-crowde-100! text-gray-100!`}
  }
`;
const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;
const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;
const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-crowde-100`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;
const Results = ({
  heading = "Pendanaan Ekspor Tanaman Sayur",
  tabs = {
    satu: [
      {
        imageSrc:
          "https://res.cloudinary.com/cangkoel/image/upload/v1624005394/result/006638200_1557907833-20190515-Petani-Kangkung-di-Banjir-Kanal-Timur-IMAM-1_egelmu.jpg",
        title: "Pendanaan ekspor sayur kangkung",
        content: "Bagi Hasil 25%",
        price: "Rp 100.000.000",
        rating: "Pendanaan",
        url: "/details",
      },
      {
        imageSrc:
          "https://res.cloudinary.com/cangkoel/image/upload/v1624005394/result/Bertahan-Jadi-Petani-Kangkung_qlwjkp.jpg",
        title: "Pendanaan ekspor sayur kangkung",
        content: "Bagi Hasil 10%",
        price: "Rp 1.000.000.000",
        rating: "Pendanaan",
        url: "/details",
      },
      {
        imageSrc:
          "https://res.cloudinary.com/cangkoel/image/upload/v1624005394/result/498694_620_h2ssmn.jpg",
        title: "Pendanaan ekspor sayur kangkung",
        content: "Bagi Hasil 15%",
        price: "Rp 300.000.000",
        rating: "Pendanaan",
        url: "/details",
      },
      {
        imageSrc:
          "https://res.cloudinary.com/cangkoel/image/upload/v1624005395/result/IMG_20200414_173841-1024x768_qri0wd.jpg",
        title: "Pendanaan ekspor sayur kangkung",
        content: "Bagi Hasil 5%",
        price: "Rp 2.000.000.000",
        rating: "Pendanaan",
        url: "/details",
      },
      {
        imageSrc:
          "https://res.cloudinary.com/cangkoel/image/upload/v1624005394/result/006638200_1557907833-20190515-Petani-Kangkung-di-Banjir-Kanal-Timur-IMAM-1_egelmu.jpg",
        title: "Pendanaan ekspor sayur kangkung",
        content: "Bagi Hasil 25%",
        price: "Rp 100.000.000",
        rating: "Pendanaan",
        url: "/details",
      },
      {
        imageSrc:
          "https://res.cloudinary.com/cangkoel/image/upload/v1624005394/result/Bertahan-Jadi-Petani-Kangkung_qlwjkp.jpg",
        title: "Pendanaan ekspor sayur kangkung",
        content: "Bagi Hasil 10%",
        price: "Rp 1.000.000.000",
        rating: "Pendanaan",
        url: "/details",
      },
      {
        imageSrc:
          "https://res.cloudinary.com/cangkoel/image/upload/v1624005394/result/498694_620_h2ssmn.jpg",
        title: "Pendanaan ekspor sayur kangkung",
        content: "Bagi Hasil 15%",
        price: "Rp 300.000.000",
        rating: "Pendanaan",
        url: "/details",
      },
      {
        imageSrc:
          "https://res.cloudinary.com/cangkoel/image/upload/v1624005395/result/IMG_20200414_173841-1024x768_qri0wd.jpg",
        title: "Pendanaan ekspor sayur kangkung",
        content: "Bagi Hasil 5%",
        price: "Rp 2.000.000.000",
        rating: "Pendanaan",
        url: "/details",
      },
    ],
    dua: getRandomCards(),
    tiga: getRandomCards(),
    empat: getRandomCards(),
  },
}) => {
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <Navbar />

      <div
        className="hero-image bg-right-bottom bg-cover flex"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/cangkoel/image/upload/v1624008127/jumbotron-result_tltwlj.png")`,
        }}
      >
        <div className="relative container mx-auto p-4 flex items-end z-10">
          <div className="content float-left py-4 px-5 my-5">
            <Search />
          </div>
        </div>
      </div>

      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>Beranda / Result / Pendanaan ekspor Tanaman Sayur</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  href={card.url}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardRating>{card.rating}</CardRating>
                    </CardRatingContainer>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto",
                        },
                        rest: {
                          opacity: 0,
                          height: 0,
                        },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>See Details</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <Footer />
    </Container>
  );
};

const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://res.cloudinary.com/cangkoel/image/upload/v1624005394/result/006638200_1557907833-20190515-Petani-Kangkung-di-Banjir-Kanal-Timur-IMAM-1_egelmu.jpg",
      title: "Pendanaan ekspor sayur kangkung",
      content: "Bagi Hasil 25%",
      price: "Rp 100.000.000",
      rating: "Pendanaan",
      url: "/details",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/cangkoel/image/upload/v1624005394/result/Bertahan-Jadi-Petani-Kangkung_qlwjkp.jpg",
      title: "Pendanaan ekspor sayur kangkung",
      content: "Bagi Hasil 10%",
      price: "Rp 1.000.000.000",
      rating: "Pendanaan",
      url: "/details",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/cangkoel/image/upload/v1624005394/result/498694_620_h2ssmn.jpg",
      title: "Pendanaan ekspor sayur kangkung",
      content: "Bagi Hasil 15%",
      price: "Rp 300.000.000",
      rating: "Pendanaan",
      url: "/details",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/cangkoel/image/upload/v1624005395/result/IMG_20200414_173841-1024x768_qri0wd.jpg",
      title: "Pendanaan ekspor sayur kangkung",
      content: "Bagi Hasil 5%",
      price: "Rp 2.000.000.000",
      rating: "Pendanaan",
      url: "/details",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/cangkoel/image/upload/v1624005394/result/006638200_1557907833-20190515-Petani-Kangkung-di-Banjir-Kanal-Timur-IMAM-1_egelmu.jpg",
      title: "Pendanaan ekspor sayur kangkung",
      content: "Bagi Hasil 25%",
      price: "Rp 100.000.000",
      rating: "Pendanaan",
      url: "/details",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/cangkoel/image/upload/v1624005394/result/Bertahan-Jadi-Petani-Kangkung_qlwjkp.jpg",
      title: "Pendanaan ekspor sayur kangkung",
      content: "Bagi Hasil 10%",
      price: "Rp 1.000.000.000",
      rating: "Pendanaan",
      url: "/details",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/cangkoel/image/upload/v1624005394/result/498694_620_h2ssmn.jpg",
      title: "Pendanaan ekspor sayur kangkung",
      content: "Bagi Hasil 15%",
      price: "Rp 300.000.000",
      rating: "Pendanaan",
      url: "/details",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/cangkoel/image/upload/v1624005395/result/IMG_20200414_173841-1024x768_qri0wd.jpg",
      title: "Pendanaan ekspor sayur kangkung",
      content: "Bagi Hasil 5%",
      price: "Rp 2.000.000.000",
      rating: "Pendanaan",
      url: "/details",
    },
  ];

  return cards.sort(() => Math.random() - 0.5);
};

export default Results;
