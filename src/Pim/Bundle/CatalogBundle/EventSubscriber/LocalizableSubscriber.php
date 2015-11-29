<?php

namespace Pim\Bundle\CatalogBundle\EventSubscriber;

use Doctrine\Common\EventSubscriber;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use Pim\Bundle\CatalogBundle\Context\CatalogContext;
use Pim\Component\Catalog\Model\AttributeOptionInterface;
use Pim\Component\Catalog\Model\ProductInterface;

/**
 * Aims to inject selected locale into loaded product
 *
 * @author    Nicolas Dupont <nicolas@akeneo.com>
 * @copyright 2013 Akeneo SAS (http://www.akeneo.com)
 * @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */
class LocalizableSubscriber implements EventSubscriber
{
    /**
     * @var CatalogContext
     */
    protected $context;

    /**
     * @param CatalogContext $context
     */
    public function __construct(CatalogContext $context)
    {
        $this->context = $context;
    }

    /**
     * Specifies the list of events to listen
     *
     * @return array
     */
    public function getSubscribedEvents()
    {
        return ['postLoad'];
    }

    /**
     * After load
     *
     * @param LifecycleEventArgs $args
     */
    public function postLoad(LifecycleEventArgs $args)
    {
        $object = $args->getObject();

        if (!$object instanceof ProductInterface && !$object instanceof AttributeOptionInterface) {
            return;
        }

        if ($this->context->hasLocaleCode()) {
            $object->setLocale($this->context->getLocaleCode());
        }
    }
}
