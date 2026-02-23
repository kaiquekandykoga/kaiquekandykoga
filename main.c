#include <stdio.h>
#include <stdlib.h>

typedef struct {
	const char *name;
	const char *url;
	const char *description;
} RepoItem;

static const char *HEADER_TEXT =
	"I am a software engineer with a primary focus on distributed systems, and I am currently expanding my skill set in AI engineering";

static const RepoItem PROGRAMMING_LANGUAGES[] = {
	{"data_s", "https://github.com/kaiquekandykoga/data_s", "Manage multiple ways to spin up databases efficiently"},
	{"github_practices", "https://github.com/kaiquekandykoga/github_practices", "A collection of GitHub best practices"},
	{"kandy_algorithms", "https://github.com/kaiquekandykoga/kandy_algorithms", "Algorithms"},
	{"kandy_labs", "https://github.com/kaiquekandykoga/kandy_labs", "This repository is used to keep track of experimental apps starting with the name labs_"},
	{"lang_cpp", "https://github.com/kaiquekandykoga/lang_cpp", "This is a personal repository for learning and practising C++"},
	{"lang_csharp", "https://github.com/kaiquekandykoga/lang_csharp", "This is a personal repository for learning and practising C#"},
	{"lang_go", "https://github.com/kaiquekandykoga/lang_go", "This is a personal repository for learning and practising Go"},
	{"lang_ruby", "https://github.com/kaiquekandykoga/lang_ruby", "This is a personal repository for learning and practising Ruby"},
	{"lang_rust", "https://github.com/kaiquekandykoga/lang_rust", "This is a personal repository for learning and practising Rust"},
	{"lang_typescript", "https://github.com/kaiquekandykoga/lang_typescript", "This is a personal repository for learning and practising TypeScript"},
	{"rfc_jwt", "https://github.com/kaiquekandykoga/rfc_jwt", "RFC Research Related to JSON Web Tokens (JWT)"},
};

static const RepoItem CICD_PIPELINES[] = {
	{"ci_basic_buildkite_ruby", "https://github.com/kaiquekandykoga/ci_basic_buildkite_ruby", "This is a personal repository for learning and practising Buildkite pipelines"},
	{"ci_basic_gitlab_ruby", "https://gitlab.com/public-kandy/ci_basic_gitlab_ruby", "This is a personal repository for learning and practising GitLab CI/CD pipelines"},
	{"ci_basic_bitbucket_ruby", "https://bitbucket.org/kaiquekandykoga/ci_basic_bitbucket_ruby", "This is a personal repository for learning and practising Bitbucket pipelines"},
};

/*
 * Returns the number of elements in an array of RepoItem structures.
 *
 * Parameters:
 *   items - A pointer to the array of RepoItem structures.
 *   size_in_bytes - The size of the array in bytes.
 *
 * Returns:
 *   The number of elements in the array.
 */
static size_t count_of(const RepoItem *items, size_t size_in_bytes) {
	(void)items; // The items parameter is not used in this function, but it is included to match the expected signature and to allow for potential future use.
	return size_in_bytes / sizeof(RepoItem);
}

/*
 * Writes a section of the README file with the given title and list of repository items.
 *
 * Parameters:
 *   output - A pointer to the file where the section will be written.
 *   title - The title of the section.
 *   items - An array of RepoItem structures representing the repositories to be listed in this section.
 *   item_count - The number of items in the items array.
 *
 * This function formats the section as a Markdown header followed by a list of repositories, where each repository is displayed as a link with its name and description.
 */
static void write_section(FILE *output, const char *title, const RepoItem *items, size_t item_count) {
	fprintf(output, "#### %s\n\n", title);

	for (size_t index = 0; index < item_count; ++index) {
		fprintf(output, "* [%s](%s) → %s\n", items[index].name, items[index].url, items[index].description);
	}

	fprintf(output, "\n");
}

/*
 * The main function of the README generator program.
 *
 * Parameters:
 *   argc - The number of command-line arguments.
 *   argv - An array of strings representing the command-line arguments.
 *
 * Returns:
 *   EXIT_SUCCESS if the README file was generated successfully, or EXIT_FAILURE if an error occurred.
 */
int main(int argc, char **argv) {
	const char *output_path = "README.md";

	if (argc > 1) {
		output_path = argv[1];
	}

	FILE *output = fopen(output_path, "w");
	if (output == NULL) {
		perror("failed to open output file");
		return EXIT_FAILURE;
	}

	fprintf(output, "%s\n\n", HEADER_TEXT);

	write_section(
		output,
		"Programming Languages",
		PROGRAMMING_LANGUAGES,
		count_of(PROGRAMMING_LANGUAGES, sizeof(PROGRAMMING_LANGUAGES))
	);

	write_section(
		output,
		"CI/CD pipelines",
		CICD_PIPELINES,
		count_of(CICD_PIPELINES, sizeof(CICD_PIPELINES))
	);

	fprintf(output, "---\n");

	if (fclose(output) != 0) {
		perror("failed to close output file");
		return EXIT_FAILURE;
	}

	printf("README generated at %s\n", output_path);
	return EXIT_SUCCESS;
}
