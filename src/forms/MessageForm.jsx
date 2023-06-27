import * as Form from "@radix-ui/react-form";

export function MessageForm({ message, updateFields }) {
  return (
    <section className="w-full lg:w-3/4">
      <Form.Field className="mb-8" name="message">
        <div className="flex justify-between mb-1">
          <Form.Label className="text-lg font-medium tracking-wider">
            Enter any message, enquiry, request or additional information you
            would like included in your website.
          </Form.Label>
        </div>
        <Form.Control asChild>
          <textarea
            className="survey-textfield"
            name="message"
            type="text"
            value={message}
            onChange={(e) => updateFields({ message: e.target.value })}
            maxLength={500}
          />
        </Form.Control>
      </Form.Field>
    </section>
  );
}
