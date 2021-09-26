var specialChars = [
  { text: "pre", value: "prescription" },
  { text: "de", value: "description" },
  { text: "pa", value: "patient" },
  { text: "ho", value: "hospital" },
  { text: "do", value: "doctor" },
];
export const setup = function (editor) {
  var onAction = function (autocompleteApi, rng, value) {
    editor.selection.setRng(rng);
    editor.insertContent(value);
    autocompleteApi.hide();
  };

  var getMatchedChars = function (pattern) {
    return specialChars.filter(function (char) {
      return char.text.indexOf(pattern) !== -1;
    });
  };
  editor.ui.registry.addAutocompleter("specialchars_cardmenuitems", {
    ch: "@",
    minChars: 0,
    columns: 1,
    highlightOn: ["char_name"],
    onAction: onAction,
    fetch: function (pattern) {
      return new Promise(function (resolve) {
        var results = getMatchedChars(pattern).map(function (char) {
          return {
            type: "cardmenuitem",
            value: char.value,
            label: char.text,
            items: [
              {
                type: "cardcontainer",
                direction: "vertical",
                items: [
                  {
                    type: "cardtext",
                    text: char.text,
                    name: "char_name",
                  },
                  {
                    type: "cardtext",
                    text: char.value,
                  },
                ],
              },
            ],
          };
        });
        resolve(results);
      });
    },
  });
};
