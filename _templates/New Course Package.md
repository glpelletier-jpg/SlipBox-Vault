<%*
// This template is triggered by QuickAdd "New Course Package"
// It calls create-course.js which handles all file creation and navigation.
await tp.user.create_course(tp);
// Discard this trigger note — the script creates the real files
await app.vault.delete(app.vault.getAbstractFileByPath(tp.file.path(true)));
%>