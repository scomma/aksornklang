# Official Style Guide for [Aksorn](https://aksorn.org/)

This is the official reference that is applied by the Aksorn engine. Like a secret sauce minus the secrecy.

For more information please refer to [About Aksorn](https://aksorn.org/about).

## Syntax
### Ruleset
In the context of the style guide, a ruleset is a group of rules aimed at catching a particular class of stylistic errors. It is defined by a text file comprising of zero or more _rules_ separated by a blank line.
### Rule
A rule is composed of up to two parts: at least one or more _match_ patterns, and the optional _suggest_ text. It is defined by consecutive non-blank lines in the ruleset file. If there are two or more lines, the final line is understood to be the suggestion. For example, this is how rules are interpreted:

```
match1
```

```
match1
suggest
```

```
match1
match2
match3
suggest
```

The _pattern_ is a regular expression. It usually employes lookbehinds heavily to prevent false positives, because the text is not tokenized before being processed. The _suggest_ part is just plain text.

## Contributing
0. If you are not fluent in regular expression, feel free to open an issue so that someone fluent may step in.
1. Create a pull request. You may work on an existing ruleset, or start a new ruleset.
2. It is entirely valid to have a rule with no reference, but where appropriate, the commit message should cite one.
3. Fierce debates are welcome and encouraged.
4. The maintainers consider themselves curators of this particular style guide and reserve the final say in accepting or rejecting any contribution.
