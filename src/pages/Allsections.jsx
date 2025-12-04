import Home from "./Home";
import Events from "./Events";
import TeamPage from "./TeamPage";
import ContactPage from "./ContactUs";

export default function AllSections() {
  return (
    <div className="all-sections">
      <section className="section"><Home /></section>
      <div className="divider"></div>

      <section className="section"><Events /></section>
      <div className="divider"></div>

      <section className="section"><TeamPage /></section>
      <div className="divider"></div>

      <section className="section"><ContactPage /></section>
    </div>
  );
}
