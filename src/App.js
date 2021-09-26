import { Editor } from "@tinymce/tinymce-react/lib/cjs/main/ts/components/Editor";
import React, { useState } from "react";
import { prescription1, prescription2 } from "./framwork";
import { plugins, toolbar } from "./plugin";
import { setup } from "./setup";

const App = () => {
  const [text, setText] = useState("");
  console.log(text);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>BDEMR Prescription maker</h1>
      <Editor
        apiKey="n3pdvoigbqrfu7nnbxtm26mlt9z3o03a4xixff6q04b7aml8"
        initialValue="
      "
        init={{
          height: 500,
          menubar: ["insert", "tools", "table"],
          plugins: plugins,
          toolbar: toolbar,
          color_cols: 5,
          selector: "textarea#autocompleter-cardmenuitem",
          table_toolbar: "tableprops tabledelete",
          template_preview_replace_values: {
            preview_username: "Jack Black",
            preview_staffid: "991234",
            inboth_username: "Famous Person",
            inboth_staffid: "2213",
          },
          templates: [
            {
              title: "Prescription",
              description: "",
              content: prescription1,
            },
            {
              title: "Prescription2",
              description: "",
              content: prescription2,
            },
          ],
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          setup: setup,
        }}
        onChange={(text) => setText(text)}
      />
    </>
  );
};

export default App;
