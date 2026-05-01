import Image from "next/image";

export default function ProfileCard() {
  return (
    <section className="profileCard">
      <div className="profileCardInner">
        <Image
          src="/images/profile.png"
          alt="Soham Thipse"
          width={120}
          height={120}
          className="profileAvatar"
          priority
        />
        <div className="profileInfo">
          <p className="profileLabel">full-stack developer</p>
          <h2 className="profileName">
            Soham Thipse
            <span className="verifiedBadge" title="Verified">✓</span>
          </h2>
          <p className="profileTagline">
            I build AI-powered systems, automation pipelines, and full-stack
            applications.
          </p>
        </div>
      </div>
    </section>
  );
}
