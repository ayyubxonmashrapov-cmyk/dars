import Header from "./Header.tsx";
import CourseHeader from "./CourseHeader.tsx";
import CourseLessons from "./CourseLessons.tsx";
import Comments from "./Comments.tsx";
import Footer from "./Footer.tsx";

function Page() {
  return <div className="flex flex-col min-w-360">
    <Header/>
    <div className="flex flex-col mx-8 mt-13.5">
      <CourseHeader/>
      <CourseLessons/>
      <Comments/>
    </div>
    <Footer/>
  </div>;
}

export default Page;
