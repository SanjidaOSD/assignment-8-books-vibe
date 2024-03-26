



import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

const ReadPages = () => {
    const bookReadingData = [
        { book: "Book A", pagesRead: 150 },
        { book: "Book B", pagesRead: 220 },
        { book: "Book C", pagesRead: 180 },
        { book: "Book D", pagesRead: 300 },
        { book: "Book E", pagesRead: 250 }
    ];

    const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#00C49F'];

    return (
        <div className='items-center'>
            
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
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pagesRead" fill="#8884d8">
                    {bookReadingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Bar>
            </BarChart>

            <div className="mt-6">
                <Link  className="bg-green-600 p-3 rounded-xl text-white font-bold" to='/home'>Go back to Home</Link>
            </div>
        </div>
    );
};

export default ReadPages;
