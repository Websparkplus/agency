import * as Form from "@radix-ui/react-form";

export function ClientForm({ name, phone, email, updateFields }) {
  return (
    <section className="w-full lg:w-3/4">
      <Form.Field className="form-field" name="fullname">
        <Form.Label className=" text-lg font-medium tracking-wider">
          Full name <span className="error-message">*</span>
        </Form.Label>
        <Form.Control asChild>
          <input
            className="survey-input"
            type="text"
            name="fullname"
            required
            value={name}
            onChange={(e) => updateFields({ name: e.target.value })}
            maxLength={50}
          />
        </Form.Control>
        <Form.Message className="error-message" match="valueMissing">
          Name is required
        </Form.Message>
      </Form.Field>

      <Form.Field className="form-field" name="email">
        <Form.Label className=" text-lg font-medium tracking-wider">
          Email <span className="error-message">*</span>
        </Form.Label>
        <Form.Control asChild>
          <input
            className="survey-input"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
          />
        </Form.Control>
        <Form.Message className="error-message" match="valueMissing">
          Email is required
        </Form.Message>
        <Form.Message className="error-message" match="typeMismatch">
          invalid email
        </Form.Message>
      </Form.Field>

      <Form.Field className="form-field" name="phone">
        <Form.Label className=" text-lg font-medium tracking-wider">
          Phone
        </Form.Label>
        <Form.Control asChild>
          <input
            className="survey-input"
            type="number"
            name="phone"
            value={phone}
            onChange={(e) => updateFields({ phone: e.target.value })}
            maxLength={20}
          />
        </Form.Control>
        <Form.Message className="error-message" match="badInput">
          invalid phone number
        </Form.Message>
      </Form.Field>
    </section>
  );
}
