<?php

declare(strict_types=1);

namespace spec\Akeneo\Connectivity\Connection\Infrastructure\Marketplace;

use Akeneo\Connectivity\Connection\Domain\Marketplace\DTO\GetAllExtensionsResult;
use Akeneo\Connectivity\Connection\Domain\Marketplace\Model\Extension;
use Akeneo\Connectivity\Connection\Infrastructure\Marketplace\GetAllExtensionsQuery;
use Akeneo\Connectivity\Connection\Infrastructure\Marketplace\WebMarketplaceApi;
use Akeneo\Connectivity\Connection\Infrastructure\Marketplace\WebMarketplaceApiInterface;
use Akeneo\Platform\VersionProviderInterface;
use PhpSpec\ObjectBehavior;

/**
 * @copyright 2021 Akeneo SAS (http://www.akeneo.com)
 * @license http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
 */
class GetAllExtensionsQuerySpec extends ObjectBehavior
{
    public function let(
        WebMarketplaceApiInterface $webMarketplaceApi,
        VersionProviderInterface $versionProvider
    )
    {
        $this->beConstructedWith($webMarketplaceApi, $versionProvider);
    }

    public function it_is_initializable(): void
    {
        $this->shouldHaveType(GetAllExtensionsQuery::class);
    }

    public function it_execute_and_returns_extension_result(
        WebMarketplaceApiInterface $webMarketplaceApi,
        VersionProviderInterface $versionProvider
    )
    {
        $versionProvider->getVersion()->willReturn('5.0');
        $versionProvider->getEdition()->willreturn('Serenity');
        $item = [
            'id' => '3881aefa-16a3-4b4f-94c3-0d6e858b60b8',
            'name' => 'Shopify connector',
            'logo' => 'https:\/\/marketplace.akeneo.com\/sites\/default\/files\/styles\/extension_logo_large\/public\/extension-logos\/Image%20from%20iOS.jpg?itok=1OF5jl0j',
            'author' => 'Ideatarmac',
            'partner' => 'Akeneo Partner',
            'description' => 'Our Shopify Akeneo Connector eases your business by refining, transforming, and publishing relevant products, images, videos, and attributes between Akeneo and Shopify.Ideatarmac\u2019s Shopify connector is a cloud based technology and has compatibility to the widest and latest range of Akeneo editions from Community to Enterprise to Growth Edition. Our aim is to make your integration the simplest possible and reduce the routine data management effort up to 70%.',
            'url' => 'https:\/\/marketplace.akeneo.com\/extension\/shopify-connector',
            'categories' => ['E-commerce'],
            'certified' => false,
        ];
        $webMarketplaceApi->getExtensions('Serenity', '5.0')->willreturn([
            'total' => 12,
            'items' => [$item],
        ]);

        $extension = Extension::fromWebMarketplaceValues($item);
        $this->execute()->shouldBeLike(GetAllExtensionsResult::create(12, [$extension]));
    }
}