import { describe, expect, test } from "@jest/globals";
import { worksList } from "./works";

describe("An object must contain", () => {
  test("A unique id of type string", () => {
    const idsAreStrings = worksList.every((element) => element.id.length);
    expect(idsAreStrings).toBe(true);

    // To know if each ID is unique, we compare the length of an array of IDs (idsArray)
    // with the length of an array of IDs without duplicates (idsArrayWithoutDuplicate).
    // If a duplicate is found, it means there are 2 IDs with the same value.
    const idsArray = worksList.map((element) => element.id);
    const idsArrayWithoutDuplicate = new Set(idsArray);
    expect(idsArray.length).toBe(idsArrayWithoutDuplicate.size);
  });

  test("A title", () => {
    const title = worksList.every((element) => element.title);
    expect(title).toBe(true);
  });

  test("A cover in 'jpg' format", () => {
    const cover = worksList.every((element) => element.cover.endsWith(".jpg"));
    expect(cover).toBe(true);
  });

  test("A gallery contains at least one property named 'type' and its value for each image array", () => {
    const imagesArrayType = worksList.map((element) =>
      element.gallery.every((element) => element.type)
    );
    expect(imagesArrayType).not.toContain(false);
  });

  test("In a gallery, an image array contains at least one image and its format is 'jpg'", () => {
    const imagesArray = worksList
      .map((element) => element.gallery.map((element) => element.images))
      .flat(1);

    expect(imagesArray.map((element) => element.length)).not.toBe(0);
    expect(
      imagesArray.map((element) =>
        element.every((element) => element.endsWith(".jpg"))
      )
    ).not.toContain(false);
  });

  test("An intro", () => {
    const intro = worksList.every((element) => element.intro);
    expect(intro).toBe(true);
  });

  test("A tech array contains at least one value", () => {
    const techsArray = worksList.filter(
      (element) => element.techs.length === 0
    );
    expect(techsArray.length).toBe(0);
  });

  test("An array of search tags contains at least one value", () => {
    const tagsArray = worksList.filter(
      (element) => element.search.length === 0
    );
    expect(tagsArray.length).toBe(0);
  });

  test("A type", () => {
    const type = worksList.every((element) => element.type);
    expect(type).toBe(true);
  });

  test("A member", () => {
    const type = worksList.every((element) => element.member);
    expect(type).toBe(true);
  });

  test("A website URL", () => {
    const websiteURL = worksList.every(
      (element) =>
        element.urlDemo === undefined ||
        element.urlDemo.startsWith("https://verapandi.github.io/")
    );
    expect(websiteURL).toBe(true);
  });

  test("A Github URL", () => {
    const githubURL = worksList.every(
      (element) =>
        element.urlGithub === undefined ||
        element.urlGithub.startsWith("https://github.com/VeraPandi/")
    );
    expect(githubURL).toBe(true);
  });
});
