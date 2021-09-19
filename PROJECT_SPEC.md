# Frontend Engineering Mini Project

Please consider this document as a set of requirements, and deliver the code necessary to fulfill these requirements. If a requirement seems ambiguous, state your understanding of the requirements in a readme or inline comments along with your solution.

## Scenario

Your mission is to create a **public gist viewer.** Once finished, we should be able to search for a GitHub username and see all the public gists for that user. From each gist, we should be able to view all the files in that gist. To make things a little more interesting, we'd also like to be able to mark our favorite files inside a gist.

## Deliverables

There is one deliverable for this project: a single page app that uses the GitHub REST API to retrieve and display gists.

## Spec

### Using the GitHub API

You'll need to use only two endpoints in your app:

- One for [listing a user's gists](https://docs.github.com/en/free-pro-team@latest/rest/reference/gists#list-gists-for-a-user)
- Another for [getting a particular gist](https://docs.github.com/en/free-pro-team@latest/rest/reference/gists#get-a-gist)


### Retrieving a user's gists

- A text box should be provided to enter a username.
- After entering the username, it should retrieve from the gist list endpoint above and list the public gists for that user in summary form. The summary should contain at least the description and the date the gist was created. (Feel free to provide additional properties if you want.)

### Retrieving the detail for a gist

- Clicking on a gist should open up a detail page for that gist. You can retrieve a particular gist from the endpoint above.
- The detail of the gist should list all the files for that gist.
- The contents of each file in the gist must be viewable somehow, but you can decide how best to do this. (Note that the contents of each file is available in the `content` key of the file object of the gist endpoint. The gist list endpoint has files but no content.) You can choose whether to show links to separate pages for each file, a summary view of each file that expands inline, or just show the full content of each file on the detail page, etc. However, your app must actually render the file contents, so do **not** open external links to GitHub. Otherwise, there's no right or wrong choice here, just your personal preference.
- Some basic navigation/header should make it possible to return from a particular gist to the list of gists for a user and to perform a search for a different user, without having to refresh the browser or use the back button. It is okay if the browser’s URL doesn’t change while navigating.

### Favorites

The deadline may be approaching, but we'd like to try to add a "favorites" feature if there's time! (Make sure that gist listing and retrieving is working first though.)

- Using a button, link, icon, etc., you should be able to mark a particular _file_ in a gist as a favorite. Once marked as a favorite, it should be clear (via text, icon, button state, etc.) that a particular file is a favorite.
- It should also be possible to unmark a particular file as a favorite.
- The list of favorites should be retained across different page views. So, for example, if a file "foo.txt" is marked as a favorite for username "foouser", and then a search is done for "baruser", "foo.txt" should still be marked as a favorite if we later search for "foouser" again and return to the "foo.txt" file. It is okay if favorites don't persist beyond a browser refresh.

### Other

- Don’t worry too much about presentation. This means no particular CSS, fonts, or images are required. This is a coding activity and not a design activity. That’s not to say we don’t appreciate great design or that we don’t value those skills if you have them! It’s just that we won’t be considering design when scoring this particular project.
- Do make sure the available interactions are intuitive. In other words, we will be considering usability.
- Your project should have a package.json with all dependencies listed so that we can install with npm.
- Feel free to google for code examples, look at Stack Overflow, peek at components on GitHub, etc. But please do **not** copy-paste third-party code into your project.
- Unit tests are not required. That's not to say we don't appreciate the value of unit tests, but they won't directly impact your score.

## Project time limit:

Please do not spend more than 2.5 hours on the project. It's a good idea to wrap things up early and have time for cleanup, **even if that means that all features aren't complete.** As mentioned in the previous section, factors other than completeness will be considered. Completing the project in less than 2.5 hours is unlikely to improve your score. Code and app quality will be weighted a lot more, so use all the time if you need it!

Be sure to commit your code regularly as you work through your solution. This is helpful for us to understand how you work. At the very least, you must commit and push to GitHub once in the two hour window.

## Once finished

_NOTE: These real-world instructions are here to give you an idea of one of ways in which you will submit your THCC in the real world. Rather than uploading to the "company" repo, upload to your own GitHub account._

* To deliver your project, simply commit and push your final work to our own repo.
* Open a pull request to merge your `project` branch to `master` (or `main`).
* As part of the pull request, use the description and/or comments on the PR to tell us:
  * A description of your solution at a high-level, including any libraries or techniques used, roughly how it works, etc.
  * What trade-offs you made
  * Any assumptions you made that affected your solution
  * What changes you would make if you had more time
  * What you would change if you built this for production
  * What parts of the spec were completed, how much time you spent, and any particular problems you ran into
* If you finish early and want to submit unfinished ideas, please add those to other branches.


## How we'll review your pull request

_NOTE: Example company review rubric._

Once complete, we'll review your pull request for:

* **Communication -** How effectively you communicate about code through the PR description, readme, and any comments.
* **Solution Design -** How you decided to solve this problem.
* **Completeness -** How much of the spec you were able to implement.
* **Clarity -** How well we can understand your code and the decisions you made in the implementation.
* **Usability -** Is it intuitive and easy to use? (Again, we're not concerned with how it _looks_, just with how it _works_.)

Note that code style does not factor much into the scoring. We understand this is a high pressure, time-boxed exercise. We are more interested in how you problem solve and communicate than write code that adheres to a particular style.
