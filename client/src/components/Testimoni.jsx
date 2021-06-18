import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "./misc/Layouts.jsx";
import {
  SectionHeading as Heading,
  Subheading as SubheadingBase,
} from "./misc/Headings.jsx";

const Subheading = tw(SubheadingBase)`text-center`;
const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = tw.img`w-20 h-20 rounded-full`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`;
const CustomerName = tw.p`mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`;

const Testimoni = ({
  subheading = "Testimonials",
  heading = "Customer's Review",
  testimonials = [
    {
      imageSrc:
        "https://res.cloudinary.com/cangkoel/image/upload/v1623944402/testimonial/petani_opynlb.jpg",
      quote:
        "Cangkoel memberikan kemudahan dalam memproduksi komoditas panen saya selain itu juga tidak perlu kuartir lagi hasil panen akan dijual, karena sudah memiliki konsumen yang jelas.",
      customerName: "Bu Khadijah",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/cangkoel/image/upload/v1623944402/testimonial/IMG_20200414_173841-1024x768_cbayew.jpg",
      quote:
        "Cangkoel membantu saya dalam hal perekonomian keluarga saya, alhamdulillah sekarang saya sudah bisa mensekolah anak saya dengan lancar hingga ke perguruan tinggi.",
      customerName: "Pak Tarjo",
    },
    {
      imageSrc:
        "https://res.cloudinary.com/cangkoel/image/upload/v1623944402/testimonial/Bertahan-Jadi-Petani-Kangkung_rgkdjm.jpg",
      quote:
        "Terimakasih investor Cangkoel saya bisa memproduksi komoditas panen saya hingga 10 kali lipat, selain itu juga saya bisa menambah lahan baru dan pekerja baru.",
      customerName: "Pak Joko",
    },
  ],
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        <Testimonials>
          {testimonials.map((testimonial, index) => (
            <TestimonialContainer key={index}>
              <Testimonial>
                <Image src={testimonial.imageSrc} />
                <Quote>"{testimonial.quote}"</Quote>
                <CustomerName>- {testimonial.customerName}</CustomerName>
              </Testimonial>
            </TestimonialContainer>
          ))}
        </Testimonials>
      </ContentWithPaddingXl>
    </Container>
  );
};

export default Testimoni;
