import Query from "../components/Query";
import AnswerWithImage from "../components/AnswerWithImage";
import SavingAreas from "../components/SavingAreas";

export const data = [
  {
    id: 1,
    message: "Top Cloud costs service in production account",
    answer: [
      <Query />,
      <AnswerWithImage
        message={
          <p>
            Your production account has accumulated costs of <b>$100,000</b>{" "}
            over the past month, here is the spread of cloud costsby services
          </p>
        }
        image="pie-chart.png"
      />,
    ],
  },
  {
    id: 2,
    message: "How can I reduce my EC2 costs?",
    answer: [
      <AnswerWithImage
        message={
          <div>
            <p>
              You can save <b>$2500</b> per month overall in EC2 costs. Click
              here to access a detailed report
            </p>
            <p className="py-2">Here are your top 2 saving areas:</p>
          </div>
        }
        customComponent={<SavingAreas />}
      />,
    ],
  },
  {
    id: 3,
    message: "Why are EC2 costs increasing so much?",
    answer: [
      <AnswerWithImage
        message={
          <p>
            Your production account(#24542) has accumulated costs of{" "}
            <b>$100,000</b> over the past month, here is the spread of cloud
            costs by services
          </p>
        }
        image="chart.png"
      />,
    ],
  },
  {
    id: 4,
    message: "Which are the largest s3 bucket by size?",
    answer: ["No data available regarding this"],
    nodata: false,
  },
];
