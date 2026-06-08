module.exports = async (params) => {
  const { app } = params;
  const file = app.vault.getAbstractFileByPath("_docs/Slip Box Master Guide.md");
  if (file) {
    await app.workspace.getLeaf(false).openFile(file);
  }
};
