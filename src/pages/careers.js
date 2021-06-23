import React from "react"
import Banner from "../components/banner"
import Layout from "../components/layout"
import Seo from "../components/seo"
import NDBsection1 from "../components/technology/NDBsection1"
import BioSection from "../components/careers/BioSection"
import OrganicTabs from "../components/organic-tabs/OrganicTabs"
import backImg from "../assets/images/careers/bannerImg.png"
import tabsImg from "../assets/images/careers/tabsImg.png"
import arrow from "../assets/images/icons/arrow.png"

const careers = () => {
  const data1 = {
    backgoundText1: "career",
    NDBSectionTitle: "Why Working at NDB is the occasion that you can’t miss",
    quote:
      "“Bring your passion, your talent and drive innovation across the globe.”",
    paragraphUnderQuote1:
      "We think that working at NDB will be one of the highlights of your life, something to be proud to share.",
    paragraphUnderQuote2:
      "NDB offers career opportunities as it favors skill development in the energy sector. We encourage and reward effort and commitment as it is a benefit for the entire team and the future of the company. Talent is the key and this is what we are looking for. Embrace our unique and immersive culture inside our company and carry our values. Thanks to diversity and hard work we are able to achieve exceptional productivity, quality, creativity and innovation for the company and its partners.",
  }
  const data2 = {
    backgoundText1: "early",
    backgoundText2: "careers",
    NDBSectionTitle: "INTERNSHIP / APPRENTICESHIP",
    paragraphUnderQuote1:
      "Are you a university student or trying to start your career? NDB is always looking for talented people. Find new opportunities and challenge yourself with NDB, we will guide you through it all. ",
  }
  const tabs = [
    {
      title: "Research & Development",
      desc: "2 open positions",
      content:
        "This department  is focused on the development of the core technologies inside NDB. Our team is composed of specialists in the battery field, nuclear physics, material and chemical science, and nanotech engineers. ",
      tabImage: tabsImg,
    },
    {
      title: "Developer",
      desc: "2 open positions",
      content:
        "Are you a Web App developer? A flutter guy? Or simply you want to improve your coding abilities? This is your place. Our Developer Team is composed of any kind of expertise in the IT sectors, from Android to iOS Developers, C++, Python, Blockchain and artificial intelligence.",
      tabImage: tabsImg,
    },
    {
      title: "Design",
      desc: "2 open positions",
      content:
        "Artists are what we are looking for. You need to be a passionate and creative UI/UX Designer to join our Design Team. The Designer Department is responsible for the design and the image of our company and products, working in close relationship with the Marketing Team providing content and animation for digital and social media.",
      tabImage: tabsImg,
    },
    {
      title: "Business Development",
      desc: "2 open positions",
      content:
        "Are you a good partnership manager and interested in new markets? Join our Team and develop new market opportunities. You will contribute to the growth of our business and explore new business paths. This department gathers Legal and Financial Specialists that will work hand in hand to push the limits and achieve success.",
      tabImage: tabsImg,
    },
    {
      title: "Human Resources",
      desc: "2 open positions",
      content:
        "People are our core value. We believe in what our employees can bring to us in terms of development, human experiences and most of all community. A fundamental role is played by our Human Resources Team that manages activities such as employee relations, recruitment, and is responsible for the well-being of our entire community, promoting the values of the company, shaping and nurturing a positive work environment.",
      tabImage: tabsImg,
    },
    {
      title: "Legal Department",
      desc: "2 open positions",
      content:
        "As a fast-growing tech company, it is important for us to have a Legal Team always updated on the state-of-art regulations and laws. The Legal Team is the most transversal team from a strategic and organizational point of view since it is in charge of the whole compliance and legal side.",
      tabImage: tabsImg,
    },
    {
      title: "Marketing & Communications",
      desc: "2 open positions",
      content:
        "Do you love content creation? Implementing new strategies? Analyzing data? This is the place to be! You will have to create content and manage our social media, digital strategy, press release and media relations. Make our business more memorable and create connections with our audience and community.",
      tabImage: tabsImg,
    },
    {
      title: "Finance & Accounting",
      desc: "2 open positions",
      content:
        " Do you like finance and accounting? Join us in our F&A Team to give more speed to our rapidly growing business. Directly contribute to our international expansion and discover what it is like to work with an all-star team in tech.",
      tabImage: tabsImg,
    },
    {
      title: "Spontaneous Applications",
      desc: "2 open positions",
      content: "We are always open to spontaneous applications!",
      tabImage: tabsImg,
    },
  ]
  return (
    <Layout>
      <Seo title="Careers" />
      <Banner
        pageName="careers"
        backImg={backImg}
        bannerLinkName="About us"
        bannerLink="/company"
        bannerDesc="“Our unity is our strength, our diversity is our power”"
      />
      <NDBsection1
        backgoundText1={data1.backgoundText1}
        buttonLink="#"
        NDBSectionTitle={data1.NDBSectionTitle}
        quote={data1.quote}
        paragraphUnderQuote1={data1.paragraphUnderQuote1}
        paragraphUnderQuote2={data1.paragraphUnderQuote2}
        backgoundText1Style="right top"
      />
      <BioSection />
      <OrganicTabs
        tabs={tabs}
        fullWidth
        pageName="Join our dynamic team"
        buttonsName="Departments"
        // linkContent="About us"
        buttonLink="/"
        buttonWidth="w-20"
        buttonTitle="About us"
        buttonImg={arrow}
        textAlign="text-center"
        buttonTextOrder="order-2"
        flex="flex-left"
      />
      <NDBsection1
        backgoundText1={data2.backgoundText1}
        backgoundText2={data2.backgoundText2}
        NDBSectionTitle={data2.NDBSectionTitle}
        paragraphUnderQuote1={data2.paragraphUnderQuote1}
        backgoundText1Style="top right"
        backgoundText2Style="bottom-20  left"
        linkContent="Apply now through LinkedIn"
        buttonLink="/"
        buttonWidth="w-40"
        buttonTitle="Apply now through LinkedIn"
        buttonImg={arrow}
        textAlign="text-center"
        flex="flex-center"
      />
    </Layout>
  )
}

export default careers
