
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const bookReadingData = [
            { book: "Termination", pagesRead: 150 },
            { book: " Happy", pagesRead: 220 },
            { book: "Emergency", pagesRead: 180 },
            { book: "Toxic W.C", pagesRead: 300 },
            { book: "Write Idea", pagesRead: 250 }
        ];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {

  return (
    <BarChart
      width={500}
      height={300}
      data={bookReadingData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="book" />
      <YAxis dataKey='' />
      <Bar dataKey="pagesRead" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {bookReadingData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
  );
}
