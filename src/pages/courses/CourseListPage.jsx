import Data from "../../data/Course";
import CourseCard from "./CourseCard";
function CourseListPage() {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            columnGap: '25px',
            rowGap: '30px',
            padding: '30px',
            justifyContent: 'center',
            background: '#f5f7fa'
        }}>
            {Data?.map((book, index) => (
                <div key={index}>  <CourseCard key={book.id} book={book} /></div>
            ))}
        </div>
    );
}
export default CourseListPage;