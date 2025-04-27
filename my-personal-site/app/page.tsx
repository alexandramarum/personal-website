export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-white text-gray-800 font-helvetica">
      <div className="w-11/12 md:w-1/2 text-center">
        <h1 className="text-2xl font-semibold mb-2 mt-2 text-justify">About Me</h1>
        <div className="text-lg text-justify">
          <p>
            I'm Alexandra, a rising Senior at the University of North Carolina at Chapel Hill pursuing a B.S. in Computer Science 
            and a B.A. in Philosophy. This summer, I will be working remotely as an iOS Software Engineer Intern for GameChanger by Dick's 
            Sporting Goods.
          </p><br />
          <p>
            Over the past two years, I've cultivated a passion for iOS development as a member of UNC's App Team Carolina, 
            a student-run non-profit organization dedicated to teaching and practicing iOS development and UI/UX design. As the iOS Bootcamp Team Lead and Chief Learning Officer, 
            I've led efforts to teach over 200 peers to build real-world apps. Additionally, I contribute to the development of the Cupboard app, which helps streamline 
            inventory management for UNC's largest on-campus food pantry, Carolina Cupboard.
          </p>
          <br />
          <p>
            I further serve the UNC community as an Undergraduate Teaching Assistant for Systems Fundamentals (COMP 211) and, previously, Computer Organization (COMP 311). I am also a 
            staff member for the Computer Science Experience Labs (CSXL) in Sitterson Hall.
          </p>
          <br />
          <h1 className="text-2xl font-semibold mb-2 mt-2 text-justify">Purpose</h1>
          <p>
            My hope in creating this website is to extend my energy from solely CS-related activities to my other interests of equal magnitude — namely writing, both philosophically
            and creatively.
          </p>
        </div>
      </div>
    </main>
  );
}
