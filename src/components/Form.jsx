const websiteTypes = [
  "Portfolio",
  "Business Website",
  "E-commerce Store",
  "Blog",
  "Landing Page",
  "Custom Web Application",
];

const featureOptions = [
  "Contact Form",
  "Online Booking",
  "User Accounts/Login",
  "Blog",
  "E-commerce / Online Store",
  "Payment Gateway",
  "Chat Support",
  "Multi-language Support",
  "Newsletter Signup",
  "Admin Dashboard",
  "Custom Features",
];

const budgetOptions = [
  "Less than $300",
  "$300 - $700",
  "$700 - $1500",
  "$1500+",
];

const communicationOptions = ["Email", "WhatsApp", "Phone Call"];

const textFields = [
  { label: "Full Name", type: "text" },
  { label: "Email Address", type: "email" },
  { label: "Phone Number", type: "tel" },
  { label: "Company/Business Name", type: "text" },
  { label: "Website", type: "url", placeholder: "Website (if you already have one)" },
];

const projectQuestions = [
  "What is the purpose of the website?",
  "Who is your target audience?",
];

const designQuestions = [
  "Do you have a logo?",
  "Do you have brand colors?",
  "Are there any websites you like? (Examples)",
  "Are there any websites you dislike? Why?",
  "Do you need a modern, minimalist, corporate, or creative design?",
];

const contentQuestions = [
  "Do you already have the content (text, images, videos)?",
  "Who will provide the content?",
  "Do you need help writing the content?",
];

const technicalQuestions = [
  "Do you already have a domain name?",
  "Do you already have hosting?",
  "Do you need help purchasing a domain and hosting?",
];

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function Section({ title, number, children }) {
  return (
    <section className="rounded-lg border border-white/15 bg-white/[0.03] p-5 shadow-2xl shadow-black/30 backdrop-blur sm:p-7">
      <div className="mb-6 flex items-center gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/35 bg-white/10 text-sm font-semibold text-white">
          {number}
        </span>
        <h2 className="text-lg font-semibold text-white sm:text-xl">{title}</h2>
      </div>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

function Field({ label, type = "text", placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white/70">{label}</span>
      <input
        type={type}
        className="block rounded-md border border-white/15 bg-black px-4 py-3 text-white transition placeholder:text-white/35 focus:border-white/70 focus:bg-black"
        placeholder={placeholder || label}
        name={slugify(label)}
      />
    </label>
  );
}

function TextAreaField({ label }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white/70">{label}</span>
      <textarea
        className="block min-h-28 w-full resize-y rounded-md border border-white/15 bg-black px-4 py-3 text-white transition placeholder:text-white/35 focus:border-white/70 focus:bg-black"
        placeholder={label}
        name={slugify(label)}
      />
    </label>
  );
}

function ChoiceGroup({ legend, name, options, type = "radio" }) {
  const indicatorClass =
    type === "checkbox"
      ? "rounded border-white/35 peer-checked:border-white peer-checked:bg-white"
      : "rounded-full border-white/35 peer-checked:border-white peer-checked:bg-white";

  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-medium text-white/70">{legend}</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option}
            className="group relative flex min-h-14 cursor-pointer items-center gap-3 rounded-md border border-white/15 bg-black px-4 py-3 text-white/75 transition hover:border-white/35 hover:bg-white/[0.06]"
          >
            <input
              type={type}
              name={name}
              value={option}
              className="peer sr-only"
            />
            <span className={`h-4 w-4 shrink-0 border transition ${indicatorClass}`}></span>
            <span className="text-sm leading-5 peer-checked:text-white">{option}</span>
            <span className="pointer-events-none absolute inset-0 rounded-md ring-0 ring-white/0 transition peer-checked:ring-1 peer-checked:ring-white/70"></span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Form() {
  return (
    <main className="min-h-screen bg-black px-4 pt-6 pb-16 sm:px-6 sm:pt-10">
      <form
        className="mx-auto w-full max-w-4xl space-y-6"
        action="https://formsubmit.co/zaamianas2005@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_subject" value="New website project questionnaire" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />

        <div className="rounded-lg border border-white/15 bg-white/[0.04] p-6 text-center shadow-2xl shadow-black/40 sm:p-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/70">
            Aywgo
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-5xl">
            Website Project Questionnaire
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">
            Share the essentials for your website so the project can be scoped clearly.
          </p>
        </div>

        <Section title="Contact" number="01">
          <div className="grid gap-5 sm:grid-cols-2">
            {textFields.map((field) => (
              <Field key={field.label} {...field} />
            ))}
          </div>
        </Section>

        <Section title="Project Details" number="02">
          <ChoiceGroup
            legend="What type of website do you need?"
            name="website-type"
            options={websiteTypes}
          />
          {projectQuestions.map((question) => (
            <TextAreaField key={question} label={question} />
          ))}
        </Section>

        <Section title="Design Preferences" number="03">
          {designQuestions.map((question) => (
            <TextAreaField key={question} label={question} />
          ))}
        </Section>

        <Section title="Content" number="04">
          {contentQuestions.map((question) => (
            <TextAreaField key={question} label={question} />
          ))}
        </Section>

        <Section title="Features" number="05">
          <ChoiceGroup
            legend="Which features do you need?"
            name="features"
            options={featureOptions}
            type="checkbox"
          />
          <TextAreaField label="Custom Features (Describe)" />
        </Section>

        <Section title="Technical Requirements" number="06">
          {technicalQuestions.map((question) => (
            <TextAreaField key={question} label={question} />
          ))}
        </Section>

        <Section title="Timeline & Budget" number="07">
          <div className="max-w-sm">
            <Field label="What is your desired launch date?" type="date" />
          </div>
          <ChoiceGroup
            legend="What is your budget range?"
            name="budget-range"
            options={budgetOptions}
          />
        </Section>

        <Section title="Final Questions" number="08">
          <TextAreaField label="How did you hear about me?" />
          <TextAreaField label="Is there anything else you'd like me to know?" />
          <ChoiceGroup
            legend="Preferred communication method:"
            name="preferred-communication"
            options={communicationOptions}
          />
        </Section>

        <Section title="Bonus Question" number="09">
          <TextAreaField label="What would make this project a success for you?" />
        </Section>

        <button
          type="submit"
          className="w-full rounded-md bg-white px-6 py-4 font-semibold text-black shadow-xl shadow-black/40 transition hover:bg-white/85 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
        >
          Submit Questionnaire
        </button>
      </form>
    </main>
  );
}

export default Form;
