export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
            <br />
          </div>
          <div className="wd-dashboard-course"> 
            <img src="/images/nodejs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/5678/Home">
                CS5678 Node JS
              </a>
              <p className="wd-dashboard-course-title">
                Backend Development with Node
              </p>
              <a href="#/Kanbas/Courses/5678/Home"> Go </a>
            </div>
            <br />
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/python.jpg" width={200} alt="Python" />
            <div>
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/91011/Home">
                CS91011 Python Programming
                </a>
                <p className="wd-dashboard-course-title">
                Data Science with Python
                </p>
                <a href="#/Kanbas/Courses/91011/Home">Go</a>
            </div>
            <br />
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/java.jpg" width={200} alt="Java" />
            <div>
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/121314/Home">
                CS121314 Java Development
                </a>
                <p className="wd-dashboard-course-title">
                Enterprise Applications with Java
                </p>
                <a href="#/Kanbas/Courses/121314/Home">Go</a>
            </div>
            <br />
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/html.jpg" width={200} alt="HTML & CSS" />
            <div>
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/151617/Home">
                CS151617 HTML & CSS
                </a>
                <p className="wd-dashboard-course-title">
                Web Design Fundamentals
                </p>
                <a href="#/Kanbas/Courses/151617/Home">Go</a>
            </div>
            <br />
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/angular.jpg" width={200} alt="Angular" />
            <div>
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/181920/Home">
                CS181920 Angular Development
                </a>
                <p className="wd-dashboard-course-title">
                Building Dynamic Web Applications
                </p>
                <a href="#/Kanbas/Courses/181920/Home">Go</a>
            </div>
            <br />
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/django.jpg" width={200} alt="Django" />
            <div>
                <a className="wd-dashboard-course-link" href="#/Kanbas/Courses/212223/Home">
                CS212223 Django Framework
                </a>
                <p className="wd-dashboard-course-title">
                Web Development with Django
                </p>
                <a href="#/Kanbas/Courses/212223/Home">Go</a>
            </div>
            <br />
          </div>
        </div>
      </div>
  );}
  