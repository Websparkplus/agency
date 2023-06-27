import * as Form from "@radix-ui/react-form";

export function ProjectForm({ previousWebsite, socialMedia, updateFields }) {
  return (
    <section className="w-full lg:w-3/4">
      <Form.Field className="form-field" name="previous_website">
        <Form.Label className="text-lg font-medium tracking-wider">
          Do you have an existing website you are looking to redesign? If yes,
          provide the link here.
        </Form.Label>

        <Form.Control asChild>
          <input
            className="survey-input"
            name="previous_website"
            type="url"
            value={previousWebsite}
            onChange={(e) => updateFields({ previousWebsite: e.target.value })}
            maxLength={100}
          />
        </Form.Control>
        <Form.Message className="error-message" match="typeMismatch">
          invalid url
        </Form.Message>
      </Form.Field>

      <Form.Field className="form-field" name="social_media">
        <Form.Label className="text-lg font-medium tracking-wider">
          Add any social media links connected to your business.
        </Form.Label>
        <Form.Control asChild>
          <textarea
            className="survey-textfield"
            name="social_media"
            type="text"
            value={socialMedia}
            onChange={(e) => updateFields({ socialMedia: e.target.value })}
          />
        </Form.Control>
      </Form.Field>
    </section>
  );
}
