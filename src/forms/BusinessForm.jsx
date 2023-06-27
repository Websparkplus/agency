import * as Form from "@radix-ui/react-form";

export function BusinessForm({
  businessName,
  businessDescription,
  updateFields,
}) {
  return (
    <section className="w-full lg:w-3/4">
      <Form.Field className="form-field" name="business_name">
        <Form.Label className="text-lg font-medium tracking-wider">
          What's the name of your business?
          <span className="error-message"> *</span>
        </Form.Label>
        <Form.Control asChild>
          <input
            className="survey-input"
            name="business_name"
            required
            maxLength={50}
            type="text"
            value={businessName}
            onChange={(e) => updateFields({ businessName: e.target.value })}
          />
        </Form.Control>
        <Form.Message className="error-message" match="valueMissing">
          Business name is required
        </Form.Message>
      </Form.Field>

      <Form.Field className="form-field" name="business_description">
        <Form.Label className="text-lg font-medium tracking-wider">
          Briefly describe your business?
          <span className="error-message"> *</span>
        </Form.Label>
        <Form.Control asChild>
          <textarea
            className="survey-textfield"
            name="business_description"
            required
            type="text"
            value={businessDescription}
            onChange={(e) =>
              updateFields({ businessDescription: e.target.value })
            }
            maxLength={1000}
          />
        </Form.Control>
        <Form.Message className="error-message" match="valueMissing">
          Business description is required
        </Form.Message>
      </Form.Field>
    </section>
  );
}
