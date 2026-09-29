export default function CTASection() {
  return (
    <section id="join-creator" className="cta-section">
      {/* Dot grid overlay */}
      <div className="cta-grid-overlay" aria-hidden="true" />

      {/* ── Decorative 3D Elements ── */}
      <div className="cta-shapes" aria-hidden="true">
        {/* TOP-LEFT: 3D Lime accent element */}
        <div className="cta-shape cta-element-tl">
          <img src="/elements/element.png" alt="" />
        </div>

        {/* LEFT-CENTER: 3D Cone */}
        <div className="cta-shape cta-cone-l">
          <img src="/elements/Cone.png" alt="" />
        </div>

        {/* BOTTOM-LEFT: 3D Ellipse ring */}
        <div className="cta-shape cta-ellipse-bl">
          <img src="/elements/Ellipse.png" alt="" />
        </div>

        {/* TOP-RIGHT: 3D Lime element 2 */}
        <div className="cta-shape cta-element-tr">
          <img src="/elements/element_2.png" alt="" />
        </div>

        {/* RIGHT-CENTER: 3D Cone 2 */}
        <div className="cta-shape cta-cone-r">
          <img src="/elements/cone_2.png" alt="" />
        </div>

        {/* BOTTOM-RIGHT: 3D Lime element 3 */}
        <div className="cta-shape cta-element-br">
          <img src="/elements/element_3.png" alt="" />
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="cta-content">
        <h2 className="cta-headline">
          Unlock Your Potential as a<br />
          Creator with ByteSpace
        </h2>

        <p className="cta-subtext">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <a href="/join" className="cta-btn" id="cta-join-creator-btn">
          Join as Creator
        </a>
      </div>
    </section>
  );
}
