import * as shell from "shelljs";

// Copy all the view templates
shell.cp( "-R", "src/views", "dist/api" );
shell.cp( "-R", "vercel.json", "dist/" );
shell.cp( "-R", ".env", "dist/" );