# SDE Babu Blog Content

# Introduction


### What's the aim of **Sde Babu Content** ?

1. provide content related to **Software Development** field
2. consists of problem solving content such as:
    - Data Structures and Algorithm
    - System Design
    -  Technologies at Workplace

### What's the unique point about **Sde Babu Content** ?

1. whole content is organized in such manner that every reader can follow the content
2. many websites contains lots of content, but not organized

### What are the Prerequisites for **Sde Babu Content** ?

1. should know atleast one [Programming Languages](https://www.geeksforgeeks.org/introduction-to-programming-languages/) Java, Python, C++ etc..
2. should have knowledge of basic data structures such as [Array, LinkedList](https://www.w3schools.in/data-structures/intro) etc..
3. should have knowledge of [data types and range](https://ecomputernotes.com/what-is-c/types-and-variables/explain-data-types-along-with-their-sizes-and-ranges) for specific data types
4. should have basic knowledge of [Time and Space Complexity](https://www.hackerearth.com/practice/basic-programming/complexity-analysis/time-and-space-complexity/tutorial/)

# How to Contribute ?

- go to github page: https://github.com/blogs-era/sde-babu-blog-content
- fork the repository: https://github.com/blogs-era/sde-babu-blog-content
- git clone `FORK_REPO_URL`
- install modules by `npm i` and run `npm start` to run the site
- git remote add upstream https://github.com/blogs-era/sde-babu-blog-content
- git remote -v ,so there should be two remote `origin` and `upstream`
- git pull upstream main
- git checkout -b username/question_title
- Make changes in your local repository and commit the code
- git push origin BRANCH_NAME
- open pull request from your repo:branch towards the upstream(main repo)

# What to do after the PR is successfully merged ?

- git checkout main
- git branch -D BRANCH_NAME

# What to do if you already forked the repo ?

- simply sync the `upstream` changes in your local 
- git pull upstream master
- git push origin master